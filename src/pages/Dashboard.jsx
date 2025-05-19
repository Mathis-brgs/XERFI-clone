import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:3000/api/protected", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (res.status === 401) navigate("/login");
        return res.json();
      })
      .then(setData);
  }, []);

  if (!data) return <div>Chargement...</div>;

  return (
    <div className="p-4">
      <h1>Bienvenue, {data.user.name}</h1>
      
    </div>
  );
}
