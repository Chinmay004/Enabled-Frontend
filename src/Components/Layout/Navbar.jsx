

// import  { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../Auth/AuthContext";
// import { Menu, X } from "lucide-react";
// import { FaUserCircle } from "react-icons/fa"; // 👈 User Icon
// // import { useAuth } from "./Auth/AuthContext";

// const Navbar = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { isAdmin } = useAuth();


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
//            <div className="flex items-center gap-4">
//             <NavLink
//               to="/profile"
//               className="flex items-center gap-2 text-white hover:scale-105 transition-transform"
//             >
//               <FaUserCircle size={28} />
//               <span>Profile</span>
//             </NavLink>

//             {isAdmin && (
//               <NavLink
//                 to="/allorders"
//                 className="bg-[#F0312F] border px-3 py-1 rounded hover:bg-red-900 transition text-white text-sm"
//               >
//                 Admin
//               </NavLink>
//             )}
//           </div>

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
//             <NavLink
//               to="/profile"
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center gap-2 bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
//             >
//               <FaUserCircle size={20} />
//               Profile
//             </NavLink>
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


import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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
            <div className="flex items-center gap-4">
              <NavLink
                to="/profile"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaUserCircle size={24} />
                <span>Profile</span>
              </NavLink>

              {isAdmin && (
                <NavLink
                  to="/allorders"
                  className="bg-white text-[#F0312F] px-3 py-1 rounded hover:bg-red-100 transition text-sm"
                >
                  Admin
                </NavLink>
              )}
            </div>
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
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-base bg-[#F0312F]">
          <NavLink to="/products" onClick={closeMenu} className="hover:underline">
            Impact Shop
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu} className="hover:underline">
            Cart
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/profile"
                onClick={closeMenu}
                className="flex items-center gap-2 bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                <FaUserCircle size={20} />
                Profile
              </NavLink>

              {isAdmin && (
                <NavLink
                  to="/allorders"
                  onClick={closeMenu}
                  className="bg-white text-[#F0312F] px-4 py-2 rounded hover:bg-gray-200 transition"
                >
                  Admin
                </NavLink>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                closeMenu();
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
