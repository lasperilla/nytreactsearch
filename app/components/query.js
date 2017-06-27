// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import helpers from "../utils/helpers";

class Query extends Component {
  constructor(props) {
      super(props);
      this.state = {topic:"", start:"", end:""};
  }  
  handleClick(event) {
      event.preventDefault()
      this.props.getQueryParams(this.state.topic, this.state.start, this.state.end);
  }
  handleChange(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="topic">Topic</label>
          <input type="text" value={this.state.topic} className="form-control" id="topic" onChange={this.handleChange.bind(this)}  />
        </div>
        <div className="form-group">
          <label for="topic">Start Date (YYYY/MM/DD)</label>
          <input type="text" value={this.state.start} className="form-control" id="start" onChange={this.handleChange.bind(this)}  />
        </div>
        <div className="form-group">
          <label for="topic">End Date (YYYY/MM/DD)</label>
          <input type="text" value={this.state.end} className="form-control" id="end" onChange={this.handleChange.bind(this)}  />
        </div>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Search</button>
      </form>
    )
  }
}

export default Query;