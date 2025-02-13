// netlify/functions/api/routes/api.js
import express from "express";
import path from "path";
import { readDirectory } from "../../utils/fileUtils.js"; // Utility function for reading files

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// /api/:slug route
router.get("/:slug", (req, res) => {
  const { slug } = req.params;

  if (slug !== "vite.svg" && slug !== "_redirects") {
    const filesDirectory = path.join(__dirname, `../../../../public/${slug}`);

    readDirectory(filesDirectory, res);
  } else {
    res.status(404).send("Not found");
  }
});

export default router;
