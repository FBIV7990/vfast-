import React from "react";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Component } from "react";
import { Home } from "./home";
import { connect } from "react-redux";
import { history } from "../helpers";
import ScrollToTop from "../components/scrolltotop";
import { Footer, Header } from "../components";
import {
  Terms,
  Career,
  ContactUs,
  PrivacyPolicy,
  VisionMission,
  WhyUs,
  Faq,
  Feedback,
  Help,
  Login,
  SignUp,
} from "../pages/public";
import NewVerification from "../pages/public/NewVerification";
// import {Admin}  from '../pages/protected/views/Admin/Admin';
// import {PrivateRoute} from '../components';
import "../pages/public/bootstrap.min.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* <Router > */}
        <ScrollToTop>
          <Header />
          {/* <Switch> */}
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/terms&conditions">
            <Terms />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/career">
            <Career />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/vision-mission">
            <VisionMission />
          </Route>
          <Route path="/why-us">
            <WhyUs />
          </Route>
          <Route path="/newverification/:data" component={NewVerification} />

          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          {/* <Redirect from="*" to="/" /> */}
          {/* </Switch> */}
          <Footer />
        </ScrollToTop>
        {/* </Router> */}
      </>
    );
  }
}

function mapState(state) {
  return state;
}

const connectedMain = connect(mapState)(Main);
export { connectedMain as Main };
