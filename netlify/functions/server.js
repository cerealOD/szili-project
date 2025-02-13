// netlify/functions/express.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors";
import serverless from "serverless-http";

// Get the current directory path (for file reading purposes)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS
app.use(cors());

// Your Express routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/api/:slug", function (req, res) {
  if (req.params.slug !== "vite.svg" && req.params.slug !== "_redirects") {
    const filesDirectory = path.join(
      __dirname,
      `../../public/${req.params.slug}`
    );
    fs.readdir(filesDirectory, (err, files) => {
      if (err) {
        return res.status(500).send("Unable to read directory");
      }
      res.json(files); // Send back the list of file names
    });
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/api/indiana-jones/:slug", function (req, res) {
  const filesDirectory = path.join(
    __dirname,
    `../../public/indiana-jones/${req.params.slug}`
  );
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to read directory");
    }
    res.json(files); // Send back the list of file names
  });
});

// Export the server
module.exports.handler = serverless(app);
