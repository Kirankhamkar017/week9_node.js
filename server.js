const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./src/routes/postRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Blog API running",
    time: new Date()
  });
});

// Routes
app.use("/api/posts", postRoutes);

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});