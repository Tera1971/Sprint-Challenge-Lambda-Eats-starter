import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Home from './components/Home';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const App = () => {

  return (
    
   
    <div>
    <>
      <h1>Lambda Eats</h1>
      <p>Good pizza can't just be tossed around!</p>
    </>
    <Router>
      <nav className="navbar">
          <Link to="/">
            <button name = 'homebutton'>Home</button>
            </Link>
          <Link to="/form"> 
          <button name = 'orderbutton'>Let's Build A Pizza!!</button>
          </Link>

      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
    </div>
  );
};
export default App;