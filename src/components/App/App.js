import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { HashRouter as Router, Route } from "react-router-dom";
import Admin from '../Admin/Admin';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        
        <Router>
          <Route exact path='/admin' component={Admin} />
        </Router>
      </div>
    );
  }
}

export default App;