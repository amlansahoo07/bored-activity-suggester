import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

// Middleware setup
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// GET route for homepage
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result }); // Render homepage with random activity data
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message, // Render homepage with error message
    });
  }
});

// POST route for filtering activities
app.post("/", async (req, res) => {
  try {
    console.log(req.body); // Log form data for debugging
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`
    );
    const result = response.data;
    res.render("index.ejs", {
      data: result[Math.floor(Math.random() * result.length)], // Render homepage with a random filtered activity
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.", // Render homepage with custom error message
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
