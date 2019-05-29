const express = require("express"); //Function
const app = express();
const genres = require("./routes/genres");
const _PORT = process.env.PORT || 3000;

app.use(express.json()); //To accept JSON Transaction

//MiddleWare for GenreServices

app.use("/api/genres", genres);

//Start the Server

app.listen(_PORT, () => {
  console.log("Listening to Port " + _PORT);
});
