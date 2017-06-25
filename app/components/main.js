// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './search';
import Saved from './saved';

// import Query from './children/query';
// import Results from './children/results';


class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <div className="jumbotron">
              <h2><strong>Which Child???</strong></h2>
              <p><em>A journey through the whimsical world of React Routing</em></p>
              <hr />
              <Search />
              <p>
                <Link to="/Saved"><button className="btn btn-danger btn-lg">Show Saved Articles Component</button></Link>
              </p>
            </div>
            <div className="row">
              <Route path="/Saved" component={Saved}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default Main;
