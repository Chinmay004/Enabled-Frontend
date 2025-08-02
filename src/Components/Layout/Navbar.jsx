

import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleImpactDropdown = () => setImpactDropdownOpen((prev) => !prev);
  const closeImpactDropdown = () => setImpactDropdownOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setImpactDropdownOpen(false);
      }
    };

    if (impactDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [impactDropdownOpen]);

  const impactOutcomes = [
    { name: "Donation Distribution", path: "/donation-distribution" },
    { name: "Online Support Group", path: "/online-support-group" },
    { name: "Online Webinar Sessions", path: "/online-webinar-sessions" },
    { name: "Patient Consultation Support", path: "/patient-consultation-support" },
    { name: "Patient Journey Documentary", path: "/patient-journey-documentary" },
    { name: "Pediatric Tracheostomy Care Booklet", path: "/pediatric-tracheostomy-care-booklet" },
    { name: "Private Consultation Booking Services", path: "/private-consultation-booking-services" },
    { name: "Pro Bono Consulting Project", path: "/pro-bono-consulting-project" },
    { name: "Research", path: "/research" }
  ];

  return (
    <nav className="w-full bg-[#F0312F] text-white font-inter shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Enabled.
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/products" className="hover:underline">Impact Shop</NavLink>

          {/* Impact Outcomes Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:underline"
              onClick={toggleImpactDropdown}
            >
              Impact Outcomes
              <ChevronDown size={16} className={`transition-transform ${impactDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {impactDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-3 text-[#F0312F]">Impact Outcomes</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {impactOutcomes.map((outcome, index) => (
                      <NavLink
                        key={index}
                        to={outcome.path}
                        className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors text-sm hover:text-[#F0312F]"
                        onClick={closeImpactDropdown}
                      >
                        {outcome.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

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

          {/* Mobile Impact Outcomes */}
          <div className="border-t border-red-400 pt-3">
            <div className="font-semibold mb-2">Impact Outcomes</div>
            <div className="space-y-1 text-sm">
              {impactOutcomes.map((outcome, index) => (
                <NavLink
                  key={index}
                  to={outcome.path}
                  className="block py-1 px-2 rounded hover:bg-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  {outcome.name}
                </NavLink>
              ))}
            </div>
          </div>

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
