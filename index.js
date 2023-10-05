import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


// function Task(name,description,note,){
//   this.name = name;
//   this.description = description;
//   this.note = note;
//   this.isdone = false;
// }
var array = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit" , (req,res) => {
  // array.push({name:req.body.name, description: req.body.description, note: req.body.note, isdone: false });
  array.push({...req.body, isdone: false });

  res.redirect("/view");
});

app.post("/updateaction/:index" , (req,res) => {
  // array.push(new Task(req.body.name, req.body.description, req.body.note ));
  var currentIndex = req.params.index;
  array[currentIndex].isdone=!array[currentIndex].isdone;
  console.log(array);
  res.redirect("/view");
});

app.post("/delete/:index" , (req,res) => {
  var currentIndex = req.params.index;  
  console.log("Deleting index: " + currentIndex);
  array.splice(currentIndex, 1);
 res.redirect("/view");
});

app.get("/view", (req, res) => {
  res.render("newView.ejs", {  data:array } );
  // console.log(array[req.params.index].isdone);

});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
