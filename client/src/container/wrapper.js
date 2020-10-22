import React from "react";
import { connect } from "react-redux";
import { Main } from "./main";
import { MainAdmin } from "./main.admin";
import { Route, Router } from "react-router-dom";
import { history } from "../helpers";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <>
        <Router history={history}>{loggedIn ? <MainAdmin /> : <Main />}</Router>
      </>
    );
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  console.log("logging loggedIn:", loggedIn);
  return { loggedIn };
}

const connectedWrapper = connect(mapState)(Wrapper);
export { connectedWrapper as Wrapper };
