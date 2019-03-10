import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { HashRouter as Router, Route } from "react-router-dom";
import Admin from '../Admin/Admin';
import Home from '../Home/Home';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header  />
        
        <Router>
          <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;