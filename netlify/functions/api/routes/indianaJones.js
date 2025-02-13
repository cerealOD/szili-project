// netlify/functions/api/routes/indianaJones.js
import express from "express";
import path from "path";
import { readDirectory } from "../../utils/fileUtils.js"; // Utility function for reading files

const router = express.Router();

// /api/indiana-jones/:slug route
router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const filesDirectory = path.join(
    __dirname,
    `../../../../public/indiana-jones/${slug}`
  );

  readDirectory(filesDirectory, res);
});

export default router;
