const config = require("config");
const pug = require("pug");
const express = require("express");

const courses = require("./routes/courses");
const home = require("./routes/home");
const app = express();

//Setting the View Engine
app.set("view engine", "pug");
app.set("views", "./views");

//Envirnonmental Variables
const _PORT = process.env.PORT || 3000;

console.log(config.get("name"));
//Middleware
app.use(express.json());
app.use(express.static("./public"));
//Defining Courses Array

//Courses Middleware Routing
app.use("/api/courses", courses);

//Home  Page Routinf
app.use("/", home);

app.listen(_PORT, () => {
  console.log(`Listening to Port ${_PORT}`);
});
