import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
        pageTitle: "Welcome to My Portfolio",
        isLoading: false,
        data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
        data: this.state.data.filter(item => {return item.category === filter;})
    });
  }

  getPortfolioItems(){
    axios
      .get("https://davidbean.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      // debugger;    // gives you access to the item object, but not to state
      return (
      <PortfolioItem 
        key={item.id} 
        item={item}/>
      );
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    if (this.state.isLoading) {   // Adding something here prevents the code after return() to show up on the page
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <hr></hr>
        <button onClick={()=> this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={()=> this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={()=> this.handleFilter('Enterprise')}>Enterprise</button>
        {/* <button onClick={this.handlePageTitleUpdate}>Change Title</button>  */}
        {/* Click Listeners need to be bind, custom functions need to be more explicit */}
      
        <div className="portfolio-items-wrapper"> {this.portfolioItems()}</div>

      </div>
    );
  }
}
// Name function that handles a click Handler with 'handle keyword'