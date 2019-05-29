const express = require("express");
const router = express.Router();
const Joi = require("joi");

__movies = [
  { id: 1, name: "ABC", genre: "Action" },
  { id: 2, name: "QWE", genre: "Comedy" },
  { id: 3, name: "ASD", genre: "Horror" },
  { id: 4, name: "ZXC", genre: "Romantic" }
];
/*
 *Get
 *gets all the moveis
 */

router.get("/", (req, res) => {
  res.send(__movies);
});

//Post a movie

router.post("/", (req, res) => {
  //Validate The Incoming data
  let { error, value } = validateData(req.body);
  if (error) return res.status(400).send("Bad Request " + error);
  newMovie = {
    id: __movies.length + 1,
    name: req.body.name,
    genre: req.body.genre
  };
  __movies.push(newMovie);
  res.send("Movie Added Successfuly");
});

//Update The Movie
router.put("/:id", (req, res) => {
  let { error, value } = validateData(req.body);
  if (error) return res.status(400).send("Bad Request " + error);
  let id = parseInt(req.params.id);
  let index = __movies.findIndex(movie => {
    return movie.id === id;
  });
  console.log(index);
  if (index < 0) return res.status(404).send("No Such Movie");
  __movies[index].name = req.body.name;
  __movies[index].genre = req.body.genre;
  res.send("Update Completed");
});

//Delete an entry
router.delete("/:id", (req, res) => {
  console.log("API called");
  let id = parseInt(req.params.id);
  let index = __movies.findIndex(movie => {
    return movie.id === id;
  });
  console.log(index);
  if (index < 0) return res.status(404).send("Bad request");
  __movies.splice(index, 1);
  res.send("Entry Deleted");
});

function validateData(request) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    genre: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(request, schema);
}
module.exports = router;
