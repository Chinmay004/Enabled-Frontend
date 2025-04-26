import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase"; // adjust this path to match your project

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login"); // or "/" or any route you want
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition "
    >
      Logout
    </button>
    </div>
  );
};

export default LogoutButton;
