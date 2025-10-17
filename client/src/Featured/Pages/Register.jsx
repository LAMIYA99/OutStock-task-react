import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Lib/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        alert("Account created successfully!");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full">
      <section className="w-full h-[300px] flex flex-col justify-center items-center bg-gray-100 relative">
        <h1 className="text-4xl font-bold text-gray-900">Create Account</h1>
        <p className="mt-2 text-gray-500">Home / Create Account</p>
      </section>

      <section className="w-full flex justify-center py-20 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <label className="text-gray-700 font-medium">Password</label>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
              >
                Create
              </button>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
