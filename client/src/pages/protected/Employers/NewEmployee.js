import React from "react";
import { connect } from "react-redux";
import { employeeActions } from "../../../actions";
import Thumbnail from "../../../img/operation.png";
import { TextBox } from "../../../components";
import { withTheme } from "styled-components";

class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      state: "",
      contact1: "",
      contact2: "",
      address: "",
      university: "",
      institute: "",
      course: "",
      year_of_passing: "",
      college_address: "",
      designation: "",
      working_from: "",
      working_to: "",
      pan_number: "",
      voter_id: "",
      aadhar_number: "",
      contact_person: "",
      company: "",
      employee_code: "",
      id: "EMP-001",
    };
  }

  componentDidMount() {
    // const {dispatch} = this.props;
    // alert(id);
    // dispatch(employeeActions.addEmployee());
  }

  onValueChange(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onSubmit() {
    const {
      name,
      mobile,
      email,
      state,
      contact1,
      contact2,
      address,
      university,
      institute,
      course,
      year_of_passing,
      college_address,
      designation,
      working_from,
      working_to,
      pan_number,
      voter_id,
      aadhar_number,
      contact_person,
      company,
      employee_code,
      id,
    } = this.state;
    const employer_id = this.props.match.params.id;
    console.log("logging id:", employer_id);
    const employerid = this.props.match.params.id;
    const data = {
      employer_id: employerid,
      unique_id: id,
      name: name,
      mobile: mobile,
      email: email,
      state: state,
      contact1: contact1,
      contact2: contact2,
      address: address,
      university: university,
      institute: institute,
      course: course,
      year_of_passing: year_of_passing,
      college_address: college_address,
      designation: designation,
      working_from: working_from,
      working_to: working_to,
      pan_number: pan_number,
      voter_id: voter_id,
      aadhar_number: aadhar_number,
      contact_person: contact_person,
      company: company,
      employee_code: employee_code,
    };

    console.log("logging employee data:", data);
    const { dispatch } = this.props;
    dispatch(employeeActions.addEmployee(data));
  }
  render() {
    const { employee } = this.props;
    console.log("logging viewEmployee", employee);
    // if(employee){
    //     const {attributes}=employee;

    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12"
              style={{
                padding: "5px",
                backgroundColor: "white",
                margin: "20px 0px",
                borderRadius: "7px",
                boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
              }}
            >
              <div style={{ textAlign: "center", background: "#2C3B4C" }}>
                <h3 style={{ color: "white", padding: "5px" }}>
                  Employee Info
                </h3>
              </div>
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Employee Id</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.employee_code}
                      placeholder="employee_code"
                      onChange={(e) => {
                        this.onValueChange(e, "employee_code");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label> Name</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.name}
                      placeholder="Name"
                      onChange={(e) => {
                        this.onValueChange(e, "name");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Email</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.email}
                      placeholder="Email"
                      onChange={(e) => {
                        this.onValueChange(e, "email");
                      }}
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Mobile</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.mobile}
                      placeholder="mobile"
                      onChange={(e) => {
                        this.onValueChange(e, "mobile");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Working from </label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.working_from}
                      placeholder="working from"
                      onChange={(e) => {
                        this.onValueChange(e, "working_from");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Working to </label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.working_to}
                      placeholder="working to"
                      onChange={(e) => {
                        this.onValueChange(e, "working_to");
                      }}
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Year of passing</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.year_of_passing}
                      placeholder="mobile"
                      onChange={(e) => {
                        this.onValueChange(e, "year_of_passing");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Voter Id </label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.voter_id}
                      placeholder="voter Id"
                      onChange={(e) => {
                        this.onValueChange(e, "voter_id");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Pan Number </label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.pan_number}
                      placeholder="pan number"
                      onChange={(e) => {
                        this.onValueChange(e, "pan_number");
                      }}
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Address</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.address}
                      placeholder="address"
                      onChange={(e) => {
                        this.onValueChange(e, "address");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Contact1</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.contact1}
                      placeholder="contact1"
                      onChange={(e) => {
                        this.onValueChange(e, "contact1");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Contact2</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.contact2}
                      placeholder="contact2"
                      onChange={(e) => {
                        this.onValueChange(e, "contact2");
                      }}
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>State</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.state}
                      placeholder="State"
                      onChange={(e) => {
                        this.onValueChange(e, "state");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>University</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.university}
                      placeholder="university"
                      onChange={(e) => {
                        this.onValueChange(e, "university");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Institute</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.institute}
                      placeholder="institute"
                      onChange={(e) => {
                        this.onValueChange(e, "institute");
                      }}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Course</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.course}
                      placeholder="course"
                      onChange={(e) => {
                        this.onValueChange(e, "course");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>College address</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.college_address}
                      placeholder="college address"
                      onChange={(e) => {
                        this.onValueChange(e, "college_address");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Aadhar Number</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.aadhar_number}
                      placeholder="aadhar number"
                      onChange={(e) => {
                        this.onValueChange(e, "aadhar_number");
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div>
                    <label>Company</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.company}
                      placeholder="Company"
                      onChange={(e) => {
                        this.onValueChange(e, "company");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Contact Person</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.contact_person}
                      placeholder="contact person"
                      onChange={(e) => {
                        this.onValueChange(e, "contact_person");
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Designation</label> <br />
                    <input
                      className="form-input"
                      type="text"
                      value={this.state.designation}
                      placeholder="designation"
                      onChange={(e) => {
                        this.onValueChange(e, "designation");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  className="submit-button"
                  onClick={() => {
                    this.onSubmit();
                  }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // else {
  //     return <h3>Loading...</h3>
  // }
  // }
}

function mapStateToProps(state) {
  const { employees } = state;
  return { employee: employees.employee };
}

const connectedNewEmployee = connect(mapStateToProps)(NewEmployee);
export default connectedNewEmployee;
