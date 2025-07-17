

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../Auth/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../../lib/firebase";
// import { Menu, X } from "lucide-react"; // You can use any icon library

// const Navbar = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/");
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="w-full bg-[#F0312F] text-white font-inter shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
//         <NavLink to="/" className="text-xl font-bold">
//           Enabled
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           <NavLink to="/products" className="hover:underline">Impact Shop</NavLink>
//           <NavLink to="/cart" className="hover:underline">Cart</NavLink>
//           {user ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
//             >
//               Signup / Login
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={toggleMenu}>
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#F0312F] px-4 py-2 flex flex-col gap-3 text-base">
//           <NavLink to="/products" onClick={() => setMenuOpen(false)}>Impact Shop</NavLink>
//           <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>
//           {user ? (
//             <button
//               onClick={() => {
//                 handleLogout();
//                 setMenuOpen(false);
//               }}
//               className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 navigate("/login");
//                 setMenuOpen(false);
//               }}
//               className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
//             >
//               Signup / Login
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa"; // 👈 User Icon

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-[#F0312F] text-white font-inter shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Enabled
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/products" className="hover:underline">Impact Shop</NavLink>
          <NavLink to="/cart" className="hover:underline">Cart</NavLink>
          
          {user ? (
            <NavLink to="/profile" className="text-white hover:scale-105 transition-transform">
              <FaUserCircle size={28} />
            </NavLink>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Signup / Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F0312F] px-4 py-2 flex flex-col gap-3 text-base">
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Impact Shop</NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>

          {user ? (
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              <FaUserCircle size={20} />
              Profile
            </NavLink>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Signup / Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
