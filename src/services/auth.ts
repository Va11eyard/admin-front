<<<<<<< HEAD
<<<<<<< HEAD
import api from "./api"

interface LoginResponse {
  access_token: string
  token_type: string
=======
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
// auth.ts
import api from "./api";

// Match backend JwtResponse
interface LoginResponse {
  token: string; // Changed from access_token to token
<<<<<<< HEAD
>>>>>>> 74c1c3e (fixes)
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
}

export const login = async (email: string, password: string) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await api.post<LoginResponse>(
      "/login",
      { email, password }, // ✅ Send JSON, not form-data
      {
        headers: {
          "Content-Type": "application/json", // ✅ Ensure JSON header
        },
      },
    )
    localStorage.setItem("token", response.data.access_token)
    return response.data
  } catch (error: any) {
    console.error("Login error:", error.message)
    throw new Error(error.message || "Login failed. Please try again.")
  }
}


export const register = async (email: string, password: string) => {
  try {
    const response = await api.post<{ message: string }>("/register", { email, password })
    return response.data
  } catch (error: any) {
    console.error("Registration error:", error.message)
    throw new Error(error.message || "Registration failed. Please try again.")
  }
}

export const resetPasswordRequest = async (email: string) => {
  try {
    const response = await api.post<{ message: string }>("/reset-password-request", { email })
    return response.data
  } catch (error: any) {
    console.error("Reset password request error:", error.message)
    throw new Error(error.message || "Failed to send reset password email. Please try again.")
  }
}

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await api.post<{ message: string }>("/reset-password", { token, new_password: newPassword })
    return response.data
  } catch (error: any) {
    console.error("Reset password error:", error.message)
    throw new Error(error.message || "Failed to reset password. Please try again.")
  }
}

export const logout = () => {
  localStorage.removeItem("token")
}

=======
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
    const response = await api.post<LoginResponse>("/login", { email, password });
    localStorage.setItem("token", response.data.token); // Store token
    console.log("Login successful, token stored:", response.data.token); // Debug
    return response.data;
  } catch (error: any) {
    console.error("Login error:", error.message);
    throw new Error(error.message || "Login failed. Please try again.");
  }
};

// Other functions unchanged...
export const register = async (email: string, password: string) => {
  try {
    const response = await api.post<{ message: string }>("/register", { email, password });
    return response.data;
  } catch (error: any) {
    console.error("Registration error:", error.message);
    throw new Error(error.message || "Registration failed. Please try again.");
  }
};

export const resetPasswordRequest = async (email: string) => {
  try {
    const response = await api.post<{ message: string }>("/reset-password-request", { email });
    return response.data;
  } catch (error: any) {
    console.error("Reset password request error:", error.message);
    throw new Error(error.message || "Failed to send reset password email. Please try again.");
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await api.post<{ message: string }>("/reset-password", { token, new_password: newPassword });
    return response.data;
  } catch (error: any) {
    console.error("Reset password error:", error.message);
    throw new Error(error.message || "Failed to reset password. Please try again.");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
<<<<<<< HEAD
};
>>>>>>> 74c1c3e (fixes)
=======
};
>>>>>>> d386ccf (Нужен бэк для users and companies)
