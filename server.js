const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/link", (req, res) => {
  res.status(200).send("Hey listen");
});

app.put("/puttasinte", (req, res) => {
  res.status(200).send("Du puttades!");
});

app.get("/cat", (req, res) => {
  res.status(200).send("Meow!");
});

app.delete("/hejhej", (req, res) => {
  res.status(200).send("Nu är du deletad!");
});

app.get("/api/sum/:a/plus/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = a + b;
  res.status(200).send({ result: result });
});

module.exports = app;
