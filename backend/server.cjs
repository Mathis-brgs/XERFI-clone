const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


const fakeUser = {
  email: "jean@example.com",
  password: "1234",
  name: "Jean Dupont",
};


const validToken = "fake-jwt-token";


app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === fakeUser.email && password === fakeUser.password) {
    return res.json({ token: validToken });
  } else {
    return res.status(401).json({ message: "Email ou mot de passe incorrect" });
  }
});

app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token manquant" });
  }

  const token = authHeader.split(" ")[1];
  if (token !== validToken) {
    return res.status(401).json({ message: "Token invalide" });
  }

  res.json({ user: { name: fakeUser.name } });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
