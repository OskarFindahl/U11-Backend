//Vanlig server

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.post("/hej", (req, res) => {
//   res.send(req);
// });

// app.put("/cool", (req, res) => {
//   res.send(req);
// });

// app.listen(port, () => {
//   console.log(`Backend running at http://localhost:${port}`);
// });

//Server vid test

const app = require("./server");
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
