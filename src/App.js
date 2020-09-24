import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import CoxBazar from './Components/TripDetails/CoxBazar';
import Sreemongol from './Components/TripDetails/Sreemongol';
import Sundarbans from './Components/TripDetails/Sundarbans';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <PrivateRoute path="/book">
              <Book/>
          </PrivateRoute>
          <Route path="/cox">
              <CoxBazar/>
          </Route>
          <Route path="/sreemongol">
              <Sreemongol/>
          </Route>
          <Route path="/sundarbans">
              <Sundarbans/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="*">
              <NoMatch/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
