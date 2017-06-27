// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Query extends Component {
  constructor(props) {
      super(props);
      this.state = {topic:"test", start:"1", end:"9"};
  }  
  handleClick() {
      this.props.getQueryParams(this.state.topic, this.state.start, this.state.end);
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Query</h3>
            </div>
            <div className="panel-body">
              <p>This is the Query component</p>
              <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>test</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Query;