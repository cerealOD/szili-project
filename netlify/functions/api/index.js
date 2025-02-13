// netlify/functions/api/index.js
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import apiRoutes from "./routes/api.js";
import indianaJonesRoutes from "./routes/indianaJones.js";

// Initialize the express app
const app = express();

// Enable CORS
app.use(cors());

// Use the imported route handlers
app.use("/api", apiRoutes); // Route for /api
app.use("/api/indiana-jones", indianaJonesRoutes); // Route for /api/indiana-jones

// Export the server as a serverless function
module.exports.handler = serverless(app);
