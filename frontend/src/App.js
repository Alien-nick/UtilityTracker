import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="container">
          <h2>Utility App</h2>
        </div>
        <Route path="/backend" exact component={backendForm}/>
        <Route path="/charts" exact component={charts}/>
        <Route path="/cards" exact component={cards}/>
        <Route path="/logs" exact component={logs}/>
      </Router>
  );
}

export default App;
