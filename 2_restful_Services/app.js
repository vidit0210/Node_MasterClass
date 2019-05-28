const express = require("express");
const Joi = require("joi"); //Returns a Class
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
  res.send(courses);
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
  const schema = {
    id: Joi.number().required(),
    course: Joi.string()
      .min(3)
      .required()
  };

  const { error, value } = Joi.validate(req.body, schema);

  if (error) {
    return res.status(404).send(`Bad Reequest ${error}`);
  }
  const coureToBeAdded = {
    id: courses.length + 1,
    course: req.body.course
  };

  courses.push(coureToBeAdded);
  res.send(`Course added to Id ${coureToBeAdded.id}`);
});

//Update  The Course  -- Put method

app.put("/api/courses/:id", (req, res) => {
  let index = parseInt(req.params.id);
  let result = courses.findIndex(course => {
    return course.id === index;
  });
  console.log(result);
  if (result === -1) return res.status(404).send("No Such Course");

  let { error, value } = validate(req);
  if (error) return res.status(400).send("Bad Request" + error);
  courses[result].course = req.body.course;
  res.send(
    "Updated course at " + courses[result].id + " is " + courses[result].course
  );
});

app.delete("/api/courses/:id", (req, res) => {
  let index = parseInt(req.body.id);
  let result = courses.findIndex(course => {
    return course.id === index;
  });
  console.log(result);
  if (result < 0) {
    return res.status(404).send("No such course in the Database AVAIALABLE");
  }
  courses.splice(result, 1);
  res.send(courses);
});

app.listen(_PORT, () => {
  console.log(`Listening to Port ${_PORT}`);
});

function validate(request) {
  const schema = {
    id: Joi.number().required(),
    course: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(request.body, schema);
}
