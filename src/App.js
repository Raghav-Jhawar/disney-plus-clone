import React from 'react';
import './App.css';
import Header from "./Components/Header.jsx"
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Header />

      <Switch >

        <Route path="/details/:id" exact>
          <Details/>
        </Route>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path = "/login" exact>
          <Login/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
