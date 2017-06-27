// if (results.length >0){
// 	resultsDiv = 
// 		<ul>
// 			results.map((e,i)=>{
// 				//build list items
// 			})
// 		</ul>	
// } else {
// 	resultsDiv = <p> Hit search to see results </p>
// }

// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Results extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>This is the Results component</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;