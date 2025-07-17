

// export default Login;
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth, provider } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, Userloading } = useAuth();
  const navigate = useNavigate();
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  useEffect(() => {
    if (!Userloading && user && !justLoggedIn) {
      if (user.emailVerified) {
        alert("You are already logged in!");
        setTimeout(() => {
          navigate("/logout");
        }, 1000);
      } else {
        signOut(auth);
      }
    }
  }, [user, Userloading, navigate, justLoggedIn]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const TokenFetcher = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        console.log("ID TOKEN:", token);
      } else {
        console.log("No user is logged in.");
      }
    };

    fetchToken();
  }, []);

  return null; // no UI
};


  const handleLogin = async (data) => {
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        await signOut(auth);
        setError("Please verify your email before logging in.");
        return;
      }

      const idToken = await user.getIdToken();
      setJustLoggedIn(true);
      await sendTokenToServer(idToken);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.emailVerified) {
        await signOut(auth);
        setError("Your Google account email is not verified.");
        return;
      }

      const idToken = await user.getIdToken();
      setJustLoggedIn(true);
      await sendTokenToServer(idToken);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendTokenToServer = async (idToken) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <TokenFetcher />
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-sm p-6 border border-gray-300 rounded-lg bg-white sm:shadow-sm ">
          <h2 className="text-center text-2xl font-semibold mb-6">Log In</h2>

          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="text-sm text-gray-600 block">
                Email <span className="text-red-400 text-md">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                className="w-full p-3 mt-1 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm text-gray-600 block">
                Password <span className="text-red-400 text-md">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
                className="w-full p-3 mt-1 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#3455b9] text-white rounded hover:bg-blue-800 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-center mt-4 text-sm font-medium">{error}</p>
          )}

          <div className="text-center mt-5">
            <p className="mb-4 text-gray-600 ">or Log in with</p>
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-[#db4444] text-white py-2 rounded hover:bg-red-600 transition"
            >
              Login with Google
            </button>
          </div>

          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
