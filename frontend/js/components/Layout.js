import React from "react";
// import {connect} from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

// import {getUser} from "../actions/userActions";

// @connect((store) => {
//   return {
//     loggedIn: store.users.loggedIn
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
    console.log("props at layout is ", this.props);
    return (
      <div>
        <Header _location={this.props.location}/>
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
