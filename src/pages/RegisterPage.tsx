<<<<<<< HEAD
import React from "react"

import Register from "../components/Auth/Register"

const RegisterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Register />
    </div>
  )
}

export default RegisterPage

=======
// /src/pages/RegisterPage.tsx
import React from "react";
import Register from "../components/Auth/Register";
import Layout from "../components/Layout/Layout";

const RegisterPage: React.FC = () => {
    return (
        <Layout>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <Register />
            </div>
        </Layout>
    );
};

export default RegisterPage;
>>>>>>> d386ccf (Нужен бэк для users and companies)
