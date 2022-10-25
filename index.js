const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

// get all data from course.json
const courses = require("./Data/course.json");

app.get("/", (req, res) => {
    res.send("Now the server is running");
});

// get all data here
app.get("/courses", (req, res) => {
  res.send(courses);
});

// get all data here
app.get("/category", (req, res) => {
  res.send(courses);
});

// get data by id
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find((c) => c.id == id);
    if (!getSingleCourse) {
      res.send("Course not found");
    }
    res.send(getSingleCourse);
});


// get data by category name

app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = courses?.find((c) => c.category == name);
    res.send(getCategory);
});


app.listen(Port, () => {
    console.log("server is running in", Port);
});

//export here
module.exports = app;