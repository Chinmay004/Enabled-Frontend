import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";


const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
  
    const { name, email, password, confirmPassword } = form;
  
    if (!name || !email || !password || !confirmPassword) {
      return setError("Please fill in all fields");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const refreshedUser = auth.currentUser
      const idToken = await refreshedUser.getIdToken();
          await sendDataToServer(refreshedUser, idToken, name);
          // toast.success("Email verified successfully!");
  
      await sendEmailVerification(user);
      setMessage("Verification email sent. Please check your inbox.");
      setIsVerifying(true);
  
      // const checkVerification = setInterval(async () => {
      //   await user.reload(); // Reload user from Firebase to get latest verification status
      //   const refreshedUser = auth.currentUser;
  
      //   if (refreshedUser && refreshedUser.emailVerified) {
      //     clearInterval(checkVerification);
      //     const idToken = await refreshedUser.getIdToken();
      //     await sendDataToServer(refreshedUser, idToken, name);
      //     toast.success("Email verified successfully!");
      //     setIsVerifying(false);
      //     setTimeout(() => {
      //       navigate("/");
      //     }, 3000);  // ✅ Redirect to home after email verified
      //   }
      // }, 3000); // ⏱️ Check every 3 seconds
    } catch (err) {
      setError(err.message);
    }
  };
  

  const handleGoogleSignup = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.emailVerified && user.providerData[0].providerId === "password") {
        return toast.error("Please verify your email before continuing.");
      }

      const idToken = await user.getIdToken();
      await sendDataToServer(user, idToken, user.displayName || "Google User");
      setMessage("Signed up with Google!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const sendDataToServer = async (user, idToken, name) => {
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          name: name.trim() || "New User",
          provider: user.providerData[0].providerId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-[calc(100vh-200px)] flex justify-center items-start font-inter ">
      
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-8 ">
          <ToastContainer position="top-right" autoClose={3000} />
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-600">{message}</p>}

          {/* <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" onChange={handleChange} value={form.name} />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} value={form.email} />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" onChange={handleChange} value={form.password} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border rounded" onChange={handleChange} value={form.confirmPassword} />

            <button type="submit" disabled={isVerifying} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {isVerifying ? "Waiting for Email Verification..." : "Sign Up"}
            </button>
          </form> */}

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm text-[#999099]">
          Name <span className="text-[#f1b4b4] text-md">*</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#f5f5f5]"
            required
          />
        </label>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-[#999099]">
          Email <span className="text-[#f1b4b4] text-md">*</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#f5f5f5]"
            required
          />
        </label>
      </div>

      <div>
        <label htmlFor="password" className="text-sm text-[#999099]">
          Password <span className="text-[#f1b4b4] text-md">*</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#f5f5f5]"
            required
          />
        </label>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="text-sm text-[#999099]">
          Confirm Password <span className="text-[#f1b4b4] text-md">*</span>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#f5f5f5]"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isVerifying}
        className="w-full bg-[#3455b9] text-white p-2 rounded hover:bg-blue-800"
      >
        {isVerifying ? "Waiting for Email Verification..." : "Sign Up"}
      </button>
    </form>


          <br className="my-4" />

          <button onClick={handleGoogleSignup} className="w-full bg-[#db4444] text-white p-2 rounded hover:bg-red-600">
            Sign Up with Google
          </button>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

       

    </div>
    <Footer/>
    </>
  );
};

export default Signup;
