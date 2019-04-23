import React, { Component } from 'react';
// import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            {/* <h1>David Bean's Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm a')}</div> */}
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />   {/*This Element should always be at the end of your Route list */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

