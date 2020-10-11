import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Coponents/Home/Home/Home';
import Appointment from './Coponents/Appointment/Appointment/Appointment';
import Login from './Coponents/Login/Login';


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path ="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
