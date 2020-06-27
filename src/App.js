import React from 'react';
import { Route, Switch } from "react-router-dom"


import './App.css';


import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Navbar from "./components/Navbar"
import About from "./Pages/About";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={SingleRoom} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;
