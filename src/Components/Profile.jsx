import React, { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)] flex justify-center items-center font-inter">
        <div className="max-w-md w-full p-6 mt-8 bg-white shadow-xl  rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>

          {user ? (
            <div className="space-y-4">
              <div>
                <strong>Name:</strong> {user.displayName || "No Name"}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>

              <Link to="/orders">
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  View Orders
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <p>Loading user...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

