`git clone`
`cd duckr/client && npm i`

### Up and Running

1) Install Dependencies
`npm install && cd client && npm install`

2) Create a new firebase application, create a local `.env` files, with appropriate `var` names that match `client/src/config`

```
const config = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DB_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID
};
```

3) Start App
`cd client && npm run start`  *starts app using react scripts*



### About
A mini twitter clone that replaces Tweets with Ducks. Built for the sole purpose of practicing `react-redux`, user authentication, and `redux-logic`.

The main `redux` stores are `Users` and `Ducks`

To get a blueprint of the approach, see `/mocks`, which is where top level planning took place.

App also uses `custom-react-scripts`. This gives you slightly more app configuration then `create-react-app`. The purpose for it in this project was to use `css-modules`.

*This project was initally based off a learn redux course offered by Tyler McGinnis*

#### ToDo
There seems to be a critical bug with `css-modules`