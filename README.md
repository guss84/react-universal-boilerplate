

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
