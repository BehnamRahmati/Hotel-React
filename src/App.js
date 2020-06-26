import React from 'react';
import { Link, Route, Switch } from "react-router-dom"


import './App.css';


import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
}

export default App;
