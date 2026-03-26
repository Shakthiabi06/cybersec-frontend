import { useState } from "react";
import API from "../../services/api";
import "../../styles/AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/admin/dashboard";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;