"use strict";

const path = require("path");
const express = require("express");
const app = new express();

// app.use('/static', express.static(__dirname + '../public'));

// app.use("/img", express.static(__dirname + "/img"));
app.use("/styles", express.static(__dirname + "/css"));
app.use("/scripts", express.static(__dirname + "/js"));

app.get("/index", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
  console.log(__dirname);
});