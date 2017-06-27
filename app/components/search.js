// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Query from './query';
import Results from './results';
import helpers from "../utils/helpers";

              //// goes under I'm child 1!
              // <p>
              //   <Link to="/Search/query"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
              //   <Link to="/Search/results"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
              // </p>

              // <Route path="/Search/query" component={query} />
              // <Route path="/Search/results" component={results} />

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {topic:"Topic", start:"", end:"", articles:[]};
  }  
  getQueryParams(topic, start, end) {
      this.setState({"topic":topic, "start":start, "end":end});
  }
  getResults(articles) {
      this.setState({"articles":articles});
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              <p>{this.state.topic}</p>
              <Query getQueryParams={this.getQueryParams.bind(this)} getResults={this.getResults.bind(this)}/>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <Results articles={this.state.articles} />
        </div>
      </div>
    )
  }
}

export default Search;