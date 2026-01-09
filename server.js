const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS as view engine
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {
  res.render("form");
});

// Handle Form Submission
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.render("result", { name, email });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
