import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Side Image */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center bg-green-600">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg"
            alt="Signup Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Create Account
          </h2>

          {/* Name */}
          <div className="mb-4 relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="pl-10 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4 relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="pl-10 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="pl-10 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mb-4"
          >
            Sign Up
          </button>

          {/* OR Divider */}
          <div className="text-center text-gray-500 mb-4">OR</div>

          {/* Social Signup */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500" />
              Sign Up with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <FaApple className="text-black" />
              Sign Up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
