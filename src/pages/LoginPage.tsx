<<<<<<< HEAD
import React from "react"

import Login from "../components/Auth/Login"

interface LoginPageProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Login setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}

export default LoginPage

=======
// /src/pages/LoginPage.tsx
import React from "react";
import Login from "../components/Auth/Login";
import Layout from "../components/Layout/Layout";

interface LoginPageProps {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated }) => {
    return (
        <Layout>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <Login setIsAuthenticated={setIsAuthenticated} />
            </div>
        </Layout>
    );
};

export default LoginPage;
>>>>>>> d386ccf (Нужен бэк для users and companies)
