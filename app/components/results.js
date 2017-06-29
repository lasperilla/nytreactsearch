
// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// Helper functions
import helpers from "../utils/helpers";


class Results extends Component {
  handleClick(event) {
      console.log("in handleclick", event)
      // helpers.postSaved(this.data-headline, this.data-url, this.data-id);
  }
  renderButton(headline, url, id){
    return <button data-headline={headline} data-url={url} data-id={id} className="btn btn-success btn-xs" onClick={(e)=>this.handleClick(e).bind(this)}>Save Article</button>
  }
  populateResults(results) {
    if (results.length >0){
        
        var resultsList = results.map(function(obj){
                        return <li>
                          <a target="_blank" href={obj.web_url}><p>{obj.headline.main}</p></a>
                          <button data-headline={obj.headline.main} data-url={obj.web_url} data-id={obj._id} className="btn btn-success btn-xs" onClick={(e)=>{console.log('onclick');
                            helpers.postSaved(e.target.dataset.headline, e.target.dataset.url, e.target.dataset._id)}}>Save Article</button>
                          <hr/>
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
              {resultsDiv}
            </div>
          </div>
    )
  }
}

export default Results;