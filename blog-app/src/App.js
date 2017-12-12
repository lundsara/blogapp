import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import {Link} from 'react-router-dom';
import About from './components/About';
import Beauty from './components/Beauty';
import Nutrition from './components/Nutrition';
import Sweat from './components/Sweat';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
     <div>
      <Header/>
         <Switch>
          <Route exact path="/beauty" component={Beauty} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/sweat" component={Sweat} />
          <Route exact path="/nutrition" component={Nutrition} />

         </Switch>


        <Footer />
      </div>
    </Router>

  </div>
    );
  }
}

export default App;
