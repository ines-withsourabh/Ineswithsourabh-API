const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// JSON files import
const allAnime = require("./data/allanime.json");
const anime = require("./data/anime.json");
const latestAnime = require("./data/latestanime.json");
const movies = require("./data/movies.json");

// Home route
app.get("/", (req, res) => {
  res.send("✅ WatchAnimeHindi API is running!");
});

// Endpoints
app.get("/allanime", (req, res) => {
  res.json(allAnime);
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
