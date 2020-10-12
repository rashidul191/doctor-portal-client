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
import Dashboard from './Coponents/Dashboard/Dashboard/Dashboard';
import AddDoctors from './Coponents/Dashboard/AddDoctors/AddDoctors';


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

        <Route path ="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>

        <Route path ="/dashboard/addDoctors">
          <AddDoctors></AddDoctors>
        </Route>

        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
