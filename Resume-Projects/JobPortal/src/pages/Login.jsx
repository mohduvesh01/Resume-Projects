import React, { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
        <div className="md:w-1/2 hidden md:flex items-center justify-center bg-indigo-600">
          <img
            src="https://img.freepik.com/free-vector/job-interview-flat-design_23-2149190143.jpg"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
            Welcome Back
          </h2>

          <div className="mb-4 relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="pl-10 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="mb-4 relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="pl-10 w-full py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition mb-4"
          >
            Login
          </button>

          <div className="text-center text-gray-500 mb-4">OR</div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500" />
              Login with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
              <FaApple className="text-black" />
              Login with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
