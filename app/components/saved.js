// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Saved extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved</h3>
            </div>
            <div className="panel-body">
              <p>This is the saved articles component</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;