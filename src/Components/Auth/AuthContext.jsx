// // AuthContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../lib/firebase";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user || null);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user || null);

      if (user) {
        // try {
        //   const token = await user.getIdToken();
        //   const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/is-admin`, {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   });

        try {
          const token = await user.getIdToken();

          const apiUrl = import.meta.env.VITE_API_URL;
          const fullUrl = `${apiUrl}/api/admin/is-admin`;

          // Debug logs
          console.log("✅ User detected:", user.email);
          console.log("🔐 Token:", token.substring(0, 20) + "...");
          console.log("🌐 Hitting URL:", fullUrl);

          const res = await fetch(fullUrl, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            console.log("✅ Admin response:", data);
            setIsAdmin(data.isAdmin || false);
          } else {
            console.error("❌ Admin check failed with status:", res.status);
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Failed to check admin status:", error);
          setIsAdmin(false);
        }
      } else {
        console.log("👤 No user signed in");
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
