const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./Data/course.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find((c) => c.id == id);
    if (!getSingleCourse) {
      res.send("Porduct khuje pai nai");
    }
    res.send(getSingleCourse);
});

app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = courses?.filter((c) => c.category == name);
    res.send(getCategory);
});


app.listen(Port, () => {
    console.log("server is running", Port);
});