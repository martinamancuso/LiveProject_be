import { fakeDB } from "./fake_database";

const express = require("express");

const app = express();
const port = 3000;

app.get("/backendStatus", (req, res) => {
  res.status(200).json({status: "success", version: "1.0"});
})

// Rotta dedicata al Login
app.post("/login", (req, res) => {
  // 1° step: recuperare dati ricevuti dal front-end
  const userEmail = req.params.email;
  const userPassword = req.params.password;
  if(!userEmail || !userPassword) {
    res.status(400).json({status: "error"});
  }
  // 2° step: confrontare i dati ricevuti 
  // 3° step: risposta ottenuta di successo o meno
});


// app.get('/api/oggetti/:id', (req, res) => {
//   const gameId = parseInt(req.params.id);
//   const game = users.find(game => game.id === gameId);
//   if (game) {
//     res.json(game);
//   } else {
//     res.status(404).json({ error: 'Gioco non trovato' });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});