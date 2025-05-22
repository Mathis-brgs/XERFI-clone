const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root", // adapte si nécessaire
    password: "mborgesxerfi7569", // idem
    database: "xerfi_test",
    port: 3306,
  })
  .promise();

app.get("/api/etudes", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        IDPLAN_EDITO,
        Code_etude,
        Titre_Etude,
        Code_Collection,
        Langue,
        Année_de_Collection,
        Prix_Spot,
        Nombres_de_pages,
        Date_de_parution,
        SousTitreAffiche,
        Etude_publiee,
        etude_aparaitre,
        Etude_publiee_abo,
        Format_etude,
        Lien_Titre,
        Secteur,
        sous_secteur,
        secteur_principal,
        sous_secteur_principal,
        Code_titre,
        id_secteur,
        id_sous_secteur,
        Auteur,
        Balise_alt,
        Pays,
        Collection_NS
      FROM plan_edito
      ORDER BY IDPLAN_EDITO DESC
      LIMIT 100
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur de récupération des données." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 API disponible sur http://localhost:${PORT}/api/etudes`);
});
