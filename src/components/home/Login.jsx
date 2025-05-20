import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="flex justify-left bg-white">
      <div className="p-4 flex flex-col w-2/3">
        <p className="mx-4">Email ou identifiant</p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 m-4 border border-gray-900 rounded-md"
        />
        <p className="mx-4 mt-2">Mot de passe</p>
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 m-4 border border-gray-900 rounded-md"
        />
        <div className="flex justify-end m-4">
          <button
            onClick={handleLogin}
            className="p-2 bg-rose-800 text-white w-1/3 font-bold"
          >
            SE CONNECTER
          </button>
        </div>
      </div>
    </div>
  );
}
