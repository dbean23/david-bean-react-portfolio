// import React, { Component} from 'react';

// import PortfolioItem from './portfolio-item';

// export default class PortfolioContainer extends Component {
//     constructor () {
//         super();
//         console.log("Portfolio container has rendered");
//     }

//     portfolioItems() {          // a custom function
//         const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

//         return data.map(item =>{
//             return <PortfolioContainer />;
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Portfolio Items Go Here</h2>

//                 {this.portfolioItems()}
//             </div>
//         );
//     }
// }

import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
        pageTitle: "Welcome to My Portfolio",
        data: [
            {title: "Quip", category: "eCommerce"},
            {title:  "Eventbrite", category: "Scheduling" },
            {title:  "Ministry Safe", category : "Enterprise" },
            {title:  "SwingAway", category: "eCommerce" }
        ],
        isLoading: false
    }
    this.handleFilter = this.handleFilter.bind(this);
    // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  portfolioItems() {

    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"}/>;
    });
  }

  handleFilter(filter) {
    this.setState({
        data: this.state.data.filter(item => {return item.category === filter;})
    })
  }

//   handlePageTitleUpdate() {
//       this.setState({
//           pageTitle: "Welcome to my Other Portfolio"
//       });
//   }

  render() {
    if (this.state.isLoading) {   // Adding something here prevents the code after return() to show up on the page
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.portfolioItems()}
        <hr></hr>
        <button onClick={()=> this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={()=> this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={()=> this.handleFilter('Enterprise')}>Enterprise</button>
        {/* <button onClick={this.handlePageTitleUpdate}>Change Title</button>  */}
        {/* Click Listeners need to be bind, custom functions need to be more explicit */}
      </div>
    );
  }
}
// Name function that handles a click Handler with 'handle keyword'