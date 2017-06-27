// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// React Bootstrap Components
import { Navbar,Nav, NavItem } from 'react-bootstrap';
//Children
import Search from './search';
import Saved from './saved';

// import Query from './children/query';
// import Results from './children/results';


class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>React NYT Search</h3>
              </div>
              <div className="col-lg-6">
                <Link to="/Search"><button className="btn btn-primary">Search Articls</button></Link>
                <Link to="/Saved"><button className="btn btn-primary">Saved Articles</button></Link>
              </div>
            </div>
            <div className="row col-lg-12">
              <Route path="/Search" component={Search}/>
              <Route path="/Saved" component={Saved}/>
            </div>
          </div>

        </div>
      </Router>

    );
  }
}

export default Main;
