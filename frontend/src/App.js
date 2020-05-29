import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backendForm from './components/backendForm';
import charts from './components/charts';
import cards from './components/cards';
import logs from './components/logs';
import logo from './logo.svg';
import "bulma/css/bulma.css";

function App() {
  return (
    <Router>
      <div class="">
          <nav class="navbar is-link is-active" role="navigation" aria-label="main navigation">
            <div class="navbar-start">
              <Link to="#" className="navbar-item"><span class="has-text-weight-bold has-white-text">Utility Notifer </span></Link>
            </div>
            <div class="navbar-end">
              <Link to="/logs" className="navbar-item"><span class="has-text-weight-bold">Gpl Logs </span></Link>
              <Link to="/backend" className="navbar-item"><span class="has-text-weight-bold">Settings </span></Link>
            </div> 
          </nav>
          <br/>
          <Route path="/backend" component={backendForm}/>
          <Route path="/charts" component={charts}/>
          <Route path="/cards" component={cards}/>
          <Route path="/logs" exact component={logs}/>
        </div>
      </Router>
  );
}

export default App;
