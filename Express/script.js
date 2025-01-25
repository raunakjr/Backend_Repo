const express = require("express");

// getting all functionalty of express by calling it
const app = express();

// way to use middleware
// this will run first before going to url
// app.use(function (req, res, next) {
//   console.log("middleware chala");
//   next();
// });

// Now we can create Routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hii this is Express Server");
});

app.get("/profile", function (req, res) {
  const user = {
    name: "Raunak Mishra",
    Age: 20,
  };
  res.send(user);
});

app.listen(3000);
