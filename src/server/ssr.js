// Node Modules
import fs from "fs";
import { basename, join } from "path";
import util from "util";
// Libraries
import React from "react";
import fetch from "isomorphic-fetch";
import { StaticRouter as Router, matchPath } from "react-router";
import { renderToString } from "react-dom/server";
import { Promise } from "bluebird";
// Redux
// import {push} from 'react-router-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "universal/redux/reducers";
import staticRoutes from "../universal/routes/static.js";

// Components
import Html from "./Html.js";

function renderApp(url, res, store, assets) {
  const context = {};

  const html = renderToString(
    <Html title="ssr boilerplate" store={store} url={url} context={context} assets={assets} />
  );
  res.send("<!DOCTYPE html>" + html);
}

export const renderPage = function(req, res) {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  const assets = require("../../build/assets.json");
  assets.manifest.text = fs.readFileSync(join(__dirname, "..", "..", "build", basename(assets.manifest.js)), "utf-8");
  let foundPath = null;
  // match request url to our React Router paths and grab component
  let { path, component } =
    staticRoutes.routes.find(({ path, exact }) => {
      foundPath = matchPath(req.url, {
        path,
        exact,
        strict: false
      });
      return foundPath;
    }) || {};
  if (!component) component = {};

  // safety check for fetchData function, if no function we give it an empty promise
  if (!component.fetchData) component.fetchData = () => new Promise((resolve, reject) => resolve());
  // meat and bones of our isomorphic application: grabbing async data
  component.fetchData({ store, params: foundPath ? foundPath.params : {} }).then(() => {
    renderApp(req.url, res, store, assets);
  });
};

export const renderDevPage = function(req, res, next) {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  let foundPath = null;
  // match request url to our React Router paths and grab component
  let { path, component } =
    staticRoutes.routes.find(({ path, exact }) => {
      foundPath = matchPath(req.url, {
        path,
        exact,
        strict: false
      });
      return foundPath;
    }) || {};
  if (!component) component = {};

  // safety check for fetchData function, if no function we give it an empty promise
  if (!component.fetchData) component.fetchData = () => new Promise((resolve, reject) => resolve());
  // meat and bones of our isomorphic application: grabbing async data
  component.fetchData({ store, params: foundPath ? foundPath.params : {} }).then(() => {
    renderApp(req.url, res, store);
  });
};
function loadData() {}
export default renderPage;
