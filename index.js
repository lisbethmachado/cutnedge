const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);


// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Configure body parsing for AJAX requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./build"));
// }

// // Add routes, both API and view
// // app.use(routes);

// // Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );
