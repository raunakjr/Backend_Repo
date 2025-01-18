const express = require("express");

// getting all functionalty of express by calling it
const app = express();

// Now we can create Routes
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
