import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import leads from "../../../img/leads.jpg";
import report from "../../../img/report.jpg";
import vendor from "../../../img/vendor.png";
import employer from "../../../img/employer1.jpg";
import verification from "../../../img/verification.jpg";
import verifier from "../../../img/verifier.jpg";

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
          <h3>Dashboard</h3>
          <div class="row">
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img
                  src={employer}
                  style={{ height: "200px", width: "100%" }}
                />
                <h3> Employers</h3>
                {/* <h3>100</h3> */}
              </a>
            </div>
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img src={vendor} style={{ height: "200px", width: "100%" }} />
                <h3> Vendors</h3>
                {/* <h3>100</h3> */}
              </a>
            </div>
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img src={leads} style={{ height: "200px", width: "100%" }} />
                <h3> Leads</h3>
                {/* <h3>100</h3> */}
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img
                  src={verifier}
                  style={{ height: "200px", width: "100%" }}
                />
                <h3> Verifiers</h3>
                {/* <h3>100</h3> */}
              </a>
            </div>
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img
                  src={verification}
                  style={{ height: "200px", width: "100%" }}
                />
                <h3> Verifications</h3>
                {/* <h3>100</h3> */}
              </a>
            </div>
            <div class="col-sm-4">
              <a href="#" class="dashboard-card">
                <img src={report} style={{ height: "200px", width: "100%" }} />
                <h3> Reports</h3>
                {/* <h3>100</h3> */}
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
