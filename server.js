const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds115071.mlab.com:15071/heroku_7cs3q9dv", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/workouts-api.js"));
app.use(require("./routes/view-html.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});

