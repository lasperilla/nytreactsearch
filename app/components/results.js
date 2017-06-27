

// var names = ['Jake', 'Jon', 'Thruster'];
//         var namesList = names.map(function(name){
//                         return <li>{name}</li>;
//                       })

//         return  <ul>{ namesList }</ul>

// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

    // let resultsDiv = populateResults(this.props.articles)


class Results extends Component {
  populateResults(results) {
    if (results.length >0){
        
        var resultsList = results.map(function(obj){
                        return <li>
                          <a target="_blank" href={obj.web_url} data-id={obj._id}>{obj.headline.main}</a>
                        </li>;
                      })

        return  <ul>{ resultsList }</ul>
    } else {
      return <p> Hit search to see results </p>
    } 
  }
  render() {
    let resultsDiv = this.populateResults(this.props.articles)
    return (
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>This is the Results component</p>
              {resultsDiv}
            </div>
          </div>
    )
  }
}

export default Results;