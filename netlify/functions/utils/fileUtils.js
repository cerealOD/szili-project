// netlify/functions/utils/fileUtils.js
import fs from "fs";

export function readDirectory(directoryPath, res) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to read directory");
    }
    res.json(files); // Send back the list of file names
  });
}
