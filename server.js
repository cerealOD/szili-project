// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors";
import { createServer } from "vite";

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Your API routes can go here
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/api/:slug", function (req, res) {
  if (req.params.slug !== "vite.svg" && req.params.slug !== "_redirects") {
    const filesDirectory = path.join(__dirname, `public/${req.params.slug}`);
    fs.readdir(filesDirectory, (err, files) => {
      if (err) {
        return res.status(500).send("Unable to read directory");
      }
      res.json(files); // Send back the list of icon file names
    });
  }
});

app.get("/api/indiana-jones/:slug", function (req, res) {
  const filesDirectory = path.join(
    __dirname,
    `public/indiana-jones/${req.params.slug}`
  );
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to read directory");
    }
    res.json(files); // Send back the list of icon file names
  });
});

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, "dist")));

// Fallback route to serve the index.html (for single-page apps)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

async function start() {
  // Create Vite dev server
  const vite = await createServer({
    server: {
      middlewareMode: "html",
    },
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

start();
