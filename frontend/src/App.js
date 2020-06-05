import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backendForm from './components/backendForm';
import powerlogs from './components/powerlogs';
import bandwidthLogs from './components/bandwidthLogs';
import Outages from './components/outages';
import 'bulma/css/bulma.css'

function App() {
  return (
    <Router>
      <div className="">
          <nav className="navbar is-link is-active" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
              <Link to="#" className="navbar-item"><span className="has-text-weight-bold has-white-text">Utility Notifer </span></Link>
            </div>
            <div className="navbar-end">
            <Link to="/outages" className="navbar-item"><span className="has-text-weight-bold">Outages </span></Link>
              <Link to="/powerlogs" className="navbar-item"><span className="has-text-weight-bold">Gpl Logs </span></Link>
              <Link to="/bandwidthlogs" className="navbar-item"><span className="has-text-weight-bold">Bandwidth Logs </span></Link>
              <Link to="/backend" className="navbar-item"><span className="has-text-weight-bold">Settings </span></Link>
            </div> 
          </nav>
          <br/>
          <Route path="/backend" component={backendForm}/>
          <Route path="/bandwidthlogs" component={bandwidthLogs}/>
          <Route path="/powerlogs" exact component={powerlogs}/>
          <Route path="/outages" component={Outages}/>
        </div>
      </Router>
  );
}

export default App;
