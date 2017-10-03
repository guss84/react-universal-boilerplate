# ⚡ (V2) Universal JS - Server Side Rendering, Code Splitting and Hot Module Reloading ⚡

## 💭 What is it?
*Universal JS: -*
JavaScript that can run on both the server and client (or any other JS platform for that matter) !

*Hot Module Reloading: -*
Replaces modules that have been changed in real time while preserving the state.

*Server Side Rendering: -*
Renders Pages on the initial for fast page loads and search engine optimization

*Code Splitting: -*
Split code into bundles so that code is asynchronously loaded by the client.

## ⚙ How?

The Basic setup goes like this...

An express server handles a request, renders the that page on the server and sends
it back to the client. The code is bundled into chunks on build time which are requested
by the client when needed for that route.

When in development mode the express server handles a request and uses the `webpack.config.development.js`
configuration as middleware to listen for file changes, build then and push them to the client.

---

This project is and updated version of [this project](https://github.com/Alex-ray/universal-hmr-ssr-react-redux). With the biggest updates being migrations to **React Router 4** and **Hot Module Reloading 3**

The main goal of this project remains the same; A simple and no BS approach to a
Universal JS, Server Side Rendering, Code Splitting and Hot Module Reloading using
the following technologies.

- React
- Redux
- React Router 4
- Webpack 2
- Hot Module Reloader 3
- Babel
- Express
- webpack-dev-middleware
- webpack-hot-middleware
- immutablejs

##  Setup
First install the dependencies, in the root directory of this project run.
`yarn install`

##  Running
For **Development** run `yarn start`

This will start a development server on `localhost:8080` that utilizes hot module
reloading for both React components and redux reducers.

For **Production** run `yarn build && yarn production`.

Currently not working, need to fix routes for react-router@4

## Notes

Set initial state with static fetchData function
DB is set to demo user, read-only access
##  Todo

Fix router for production
