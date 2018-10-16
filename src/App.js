import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div  className="mySection">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/Contact" component={Contact} exact />
            <Route component={Error} exact />
          </Switch>
          </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
