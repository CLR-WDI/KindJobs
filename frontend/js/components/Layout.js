import React from "react";
// import {connect} from "react-redux"

import Footer from "./Footer";
import Header from "./Header";

// @connect((store) => {
//   return{
//
//   }
// })

class Layout extends React.Component {
  getChildContext() {
    return {
      history: this.props.history,
      route: this.props.route
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div class="pushDaFoota">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.childContextTypes = {
  history: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired
};

export default Layout;
