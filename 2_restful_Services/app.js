const express = require("express");
const app = express();

//Envirnonmental Variables
const _PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
//Defining Courses Array

const courses = [
  { id: 1, course: "Python" },
  { id: 2, course: "JavaScript" },
  { id: 3, course: "Ruby" }
];
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4]);
});

//parameters uses :id routes
app.get("/api/courses/:id", (req, res) => {
  let index = parseInt(req.params.id);

  const result = courses.find(c => {
    return c.id === index;
  });
  if (!result) res.status(404).send("Page Not Found!");
  res.send(result);
});

//Post Method
app.post("/api/courses", (req, res) => {
  const coureToBeAdded = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(coureToBeAdded);
  res.send(`Course added to Id ${coureToBeAdded.id}`);
});

app.listen(_PORT, () => {
  console.log(`Listening to Port ${_PORT}`);
});
