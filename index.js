const express = require('express');
const app = express();
const morgan = require("morgan")
const logger = require("morgan");
const path = require('path');
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }
  
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });

app.use(logger)

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);