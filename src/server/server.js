import http from "http";
import express from "express";
import colors from "colors";
import path from "path";
import mongoose from "mongoose";
import { Promise } from "bluebird";
import ridesRoutes from "./api/rides";
require("dotenv").config();
// Server Side Rendering
import { renderPage, renderDevPage } from "./ssr.js";
const PROD = process.env.NODE_ENV === "production";
const app = express();

mongoose.connect(process.env.DB_HOST, {
  useMongoClient: true
  /* other options */
});
mongoose.Promise = Promise;
app.use("/api", ridesRoutes);

if (PROD) {
  app.use("/static", express.static("build"));
  app.get("*", renderPage);
} else {
  const HMR = require("./hmr.js");
  // Hot Module Reloading
  HMR(app);
  app.get("*", renderDevPage);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
if (!PROD) {
  app.use(function(err, req, res, next) {
    console.error("error : ", err);
    res.status(err.status || 500);
  });
}

// production error handler
app.use(function(err, req, res, next) {
  console.error("error : ", err.message);
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(8080, function() {
  const address = server.address();
  console.log(`${address.port}`);
});
