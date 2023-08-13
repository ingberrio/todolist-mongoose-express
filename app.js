// Import required packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an instance of Express app
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Use bodyParser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define the item schema for the MongoDB model
const itemSchema = {
  name: String,
};

// Create an "Item" model based on the itemSchema
const Item = mongoose.model("item", itemSchema);

// Connect to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");

  // Start the Express server
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
})
.catch((error) => {
  console.error('Error to connect MongoDB:', error);
});

// Route to render the home page
app.get("/", async function(req, res) {
  try {
    // Fetch all items from the database
    const itemsFound = await Item.find({});
    // Render the "list" view with the fetched items
    res.render("list", { listTitle: "Today", newListItems: itemsFound });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle adding a new item
app.post("/", async function(req, res) {
  try {
    // Extract the new item's name from the request body
    let itemName = req.body.newItem;
    // Create a new item using the Item model
    await Item.create({ name: itemName });

    console.log("Item saved successfully");
    // Redirect to the home page
    res.redirect("/");
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle adding a new item
app.post("/delete", async function(req, res) {
  try {
    // Extract the new item's id checkbox from the request body
    const listName = req.body.listItem;
    
    // Delete a item using the Item model
    await Item.deleteOne({ _id: listName });

    console.log("Item deleted successfully");
    // Redirect to the home page
    res.redirect("/");
  } catch (error) {
    console.error("Error delete item:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to render the "about" page
app.get("/about", function(req, res) {
  res.render("about");
});
