//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const itemSchema = {
  name: String,
}

const Item = mongoose.model("item", itemSchema)

const items = [
  {
    name:"Buy milk",
  },
  {
    name : "Go to the gym"
  },
  {
    name :"Eat breakfast"
  }
]

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {useNewUrlParser: true})

.then(async () => {

  try {
    // Insert the names array into the "items" collection
    await Item.insertMany(items);

    // Fetch task name in view home
    let itemsFound = await Item.find({});
    app.get("/", function(req, res) {
      res.render("list", { listTitle: "Today", newListItems: itemsFound });
    });
    
    console.log('Documents inserted successfully');
    
    mongoose.connection.close();
    } catch (err) {
      console.error('Error inserting documents:', err);
    }
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error); // Connection error message
  });


app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});


app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
