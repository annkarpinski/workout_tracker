const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/workouts-api.js"));
app.use(require("./routes/view-html.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});

