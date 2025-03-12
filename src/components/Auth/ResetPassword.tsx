<<<<<<< HEAD

import React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { resetPassword } from "../../services/auth"

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const token = new URLSearchParams(location.search).get("token")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!token) {
      setError("Invalid reset token")
      return
    }

    try {
      const response = await resetPassword(token, newPassword)
      setMessage(response.message)
      setTimeout(() => navigate("/login"), 3000)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Your Password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="sr-only">
                New Password
              </label>
              <input
=======
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "../../services/auth";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!token) {
      setError("Invalid reset token");
      return;
    }
    try {
      const response = await resetPassword(token, newPassword);
      setMessage(response.message);
      setTimeout(() => navigate("/login"), 3000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Reset Your Password</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
>>>>>>> d386ccf (Нужен бэк для users and companies)
                id="new-password"
                name="newPassword"
                type="password"
                required
<<<<<<< HEAD
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm New Password
              </label>
              <input
=======
                placeholder="New Password"
                className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
>>>>>>> d386ccf (Нужен бэк для users and companies)
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
<<<<<<< HEAD
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {message && <div className="text-green-500 text-sm">{message}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword

=======
                placeholder="Confirm New Password"
                className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {message && <div className="text-green-500 text-sm">{message}</div>}
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md text-white bg-primary hover:bg-primary-hover transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
  );
};

export default ResetPassword;
>>>>>>> d386ccf (Нужен бэк для users and companies)
