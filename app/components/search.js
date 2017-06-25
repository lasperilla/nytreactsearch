// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import Query from './query';
// import Results from './results';

              //// goes under I'm child 1!
              // <p>
              //   <Link to="/Search/query"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
              //   <Link to="/Search/results"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
              // </p>

              // <Route path="/Search/query" component={query} />
              // <Route path="/Search/results" component={results} />

class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              <p>This is the search component</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;