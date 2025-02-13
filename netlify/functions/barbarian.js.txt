const fs = require("fs");
const path = require("path");

export const handler = async () => {
  // Directory where images are stored in the `public` folder
  const imagesDir = path.join(__dirname, "dist/barbarian");

  try {
    // Read the contents of the `images` directory
    const files = fs.readdirSync(imagesDir);

    // const imageFiles = files.filter(file => file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".jpeg"));

    return {
      statusCode: 200,
      body: JSON.stringify(files), // Return the list of image filenames
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to read images directory" }),
    };
  }
};
