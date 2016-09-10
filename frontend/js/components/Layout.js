import React from "react";
// import {connect} from "react-redux"

import Footer from "./Footer";
import Header from "./Header";

// @connect((store) => {
//   return{
//
//   }
// })

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
