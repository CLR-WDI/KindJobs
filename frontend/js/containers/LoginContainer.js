import React from "react";
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import {Tabs, Tab} from "react-bootstrap"

export default class LoginContainer extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div class="container-fluid">
        <div class="col-md-6 col-md-offset-3">
          <Tabs bsStyle="pills" defaultActiveKey={1} id="loginTabs" className="content-panel">
            <Tab eventKey={1} title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey={2} title="Signup">
              <SignupForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}
