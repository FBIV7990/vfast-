import React from "react";
import { Header, Footer } from "../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Slider, Body } from "../components";

class Home extends React.Component {
  render() {
    return (
      <>
        <Slider />
        <Body />
        {/* <Service/> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
