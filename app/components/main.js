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
      <div>
        <p>this is the main div</p>
        <hr/>
        <Search />
        <Saved />
      </div>
      // <Router>
      //   <div className="container">
      //       <div className="jumbotron">
      //         <h2><strong>Which Child???</strong></h2>
      //         <p><em>A journey through the whimsical world of React Routing</em></p>
      //         <hr />
      //         <p>
      //           <Link to="/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></Link>
      //           <Link to="/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></Link>
      //         </p>
      //       </div>
      //       <div className="row">
      //         <Route path="/Child1" component={Child1}/>
      //         <Route path="/Child2" component={Child2}/>
      //       </div>
      //   </div>
      // </Router>
    );
  }
}

export default Main;
