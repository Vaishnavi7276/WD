// Import packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/eventRegistrationDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Create Schema
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  date: { type: Date, default: Date.now },
});

// Create Model
const Registration = mongoose.model("Registration", registrationSchema);

// Route to store form data
app.post("/register", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const newEntry = new Registration({
      name,
      email,
      mobile,
    });

    await newEntry.save();
    res.json({ message: "Registration saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving registration data" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
