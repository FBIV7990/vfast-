import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { CSVLink, CSVDownload } from "react-csv";
import CheckBox from "react-animated-checkbox";

import { presetFormActions } from "../../../actions";
import select from "../../../img/select.png";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {},
      columns: [],
      chkPhysical: false,
      chkPreEmployment: false,
      chkEducation: false,
      chkJudicial: false,
      chkDrugTest: false,
      chkCibil: false,
    };
  }
  columns = [];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(presetFormActions.getAll());
  }

  onCheckChanged(e) {
    const control = e.target;
    this.setState({ [control.name]: control.checked });
  }
  getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }

  render() {
    const { forms } = this.props;

    if (!forms) return <h3>Loading.....</h3>;

    const {
      chkPhysical,
      chkPreEmployment,
      chkEducation,
      chkJudicial,
      chkDrugTest,
      chkCibil,
    } = this.state;

    var columns = forms.basic_info;

    if (chkPhysical) {
      columns = [...columns, ...forms.physical_check];
    }
    if (chkEducation) {
      columns = [...columns, ...forms.education_check];
    }
    if (chkPreEmployment) {
      columns = [...columns, ...forms.pre_employment_check];
    }
    if (chkJudicial) {
      columns = [...columns, ...forms.judicial_check];
    }
    if (chkCibil) {
      columns = [...columns, ...forms.cibil_check];
    }
    if (chkDrugTest) {
      columns = [...columns, ...forms.drug_test];
    }

    const obj = columns.map((col) => {
      return col.key;
    });
    this.columns = this.getUnique(obj);

    return (
      <div
        className="container-fluid"
        style={{ background: "white", padding: "20px" }}
      >
        <div class="row">
          <div class="col-sm 6">
            <div>
              <div>
                <h3>Select your checks and download excel file</h3>

                <div>
                  <CheckBox
                    checked={this.state.chkPhysical}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={() => {
                      this.setState({ chkPhysical: !this.state.chkPhysical });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    Physical Check
                  </a>
                </div>

                <div>
                  <CheckBox
                    checked={this.state.chkEducation}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={(e) => {
                      this.setState({ chkEducation: !this.state.chkEducation });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    Education Check
                  </a>
                </div>

                <div>
                  <CheckBox
                    checked={this.state.chkPreEmployment}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={(e) => {
                      this.setState({
                        chkPreEmployment: !this.state.chkPreEmployment,
                      });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    Pre Employment Check
                  </a>
                </div>

                <div>
                  <CheckBox
                    checked={this.state.chkCibil}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={(e) => {
                      this.setState({ chkCibil: !this.state.chkCibil });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    CIBIL score Check
                  </a>
                </div>
                <div>
                  <CheckBox
                    checked={this.state.chkJudicial}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={(e) => {
                      this.setState({ chkJudicial: !this.state.chkJudicial });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    Judicial Check
                  </a>
                </div>
                <div>
                  <CheckBox
                    checked={this.state.chkDrugTest}
                    checkBoxStyle={{
                      checkedColor: "#2C3B4C",
                      size: 35,
                      unCheckedColor: "#b8b8b8",
                    }}
                    duration={400}
                    onClick={(e) => {
                      this.setState({ chkDrugTest: !this.state.chkDrugTest });
                    }}
                  />
                  <a
                    style={{
                      fontSize: "18px",
                      color: "#2C3B4C",
                      padding: "10px 15px",
                      position: "absolute",
                      marginTop: "10px",
                    }}
                  >
                    Drug Test
                  </a>
                </div>
              </div>
              <div>
                <br />
                <CSVLink data={[this.columns]}>
                  <button
                    style={{
                      padding: 10,
                      background: "#2C3B4C",
                      color: "white",
                      borderRadius: "5px",
                      border: "0px solid white",
                    }}
                  >
                    Download now &nbsp;<i class="fa fa-fw fa-download"></i>
                  </button>
                </CSVLink>
              </div>
            </div>
          </div>

          <div class="col-sm 6">
            <img src={select} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { presetform } = state;
  console.log(presetform);
  return { forms: presetform.checks };
}

const connectedForms = connect(mapStateToProps)(Forms);
export default connectedForms;
