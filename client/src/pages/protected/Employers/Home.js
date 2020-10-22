import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { users } = this.props;

    return (
      <>
        <div>
          <h1>Dashboard</h1>

          <div class="row">
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <h2> Verifications</h2>
                <h3>100</h3>
              </a>
            </div>
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <h2> Reports</h2>
                <h3>100</h3>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedHome = connect(mapStateToProps)(Home);
export default connectedHome;
