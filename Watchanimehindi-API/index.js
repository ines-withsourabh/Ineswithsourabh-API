const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// JSON files import
const ines = require("./data/Ines.json");
const latestInes = require("./data/latest-ines.json"); // ✅ New import
const anime = require("./data/anime.json");
const latestAnime = require("./data/latestanime.json");
const movies = require("./data/movies.json");
const recommended = require("./data/recommended.json");

// Home route
app.get("/", (req, res) => {
  res.send("✅ WatchAnimeHindi API is running!");
});

// Endpoints
app.get("/Ines", (req, res) => {
  res.json(ines);
});

app.get("/latest-ines", (req, res) => {
  res.json(latestInes); // ✅ New endpoint
});

app.get("/anime", (req, res) => {
  res.json(anime);
});

app.get("/latest", (req, res) => {
  res.json(latestAnime);
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/recommended", (req, res) => {
  res.json(recommended);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
