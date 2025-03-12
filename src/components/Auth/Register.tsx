<<<<<<< HEAD

import React from "react"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { register } from "../../services/auth"

const Register: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setIsLoading(true)
      await register(email, password)
      navigate("/login")
    } catch (err: any) {
      console.error("Registration error:", err)
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50">
      <div className="max-w-md w-full m-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Create your account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
=======
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../services/auth";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setIsLoading(true);
      await register(email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Create your account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="remember" value="true" />
>>>>>>> d386ccf (Нужен бэк для users and companies)
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
<<<<<<< HEAD
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

=======
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
              </div>
>>>>>>> d386ccf (Нужен бэк для users and companies)
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
<<<<<<< HEAD
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters long</p>
              </div>

=======
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters long</p>
              </div>
>>>>>>> d386ccf (Нужен бэк для users and companies)
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
<<<<<<< HEAD
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {error && <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</div>}

              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
=======
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                />
              </div>
              {error && <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</div>}
              <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-primary-hover transition ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
>>>>>>> d386ccf (Нужен бэк для users and companies)
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
<<<<<<< HEAD
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:text-primary-700">
=======
          <div className="px-6 py-4 bg-gray-50 border-t">
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:text-primary-hover">
>>>>>>> d386ccf (Нужен бэк для users and companies)
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  )
}

export default Register

=======
  );
};

export default Register;
>>>>>>> d386ccf (Нужен бэк для users and companies)
