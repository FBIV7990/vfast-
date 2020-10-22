import React from "react";
import { connect } from "react-redux";
import { employeeActions } from "../../../actions";
import ModalImage from "react-modal-image";
import { apiUrl } from "../../../helpers";

class ViewEmployeeDetails extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    alert(id);
    dispatch(employeeActions.getById(id));
  }
  render() {
    const { employee } = this.props;
    if (employee) {
      const documentList =
        employee &&
        employee.documents.map((emp) => (
          <div className="employee-image" style={{ float: "left" }}>
            <a
              href={apiUrl + "/" + emp.filepath}
              target="_blank"
              style={{ padding: "10px", margin: "10px" }}
            >
              <img
                src={apiUrl + "/" + emp.filepath}
                style={{ height: "200px", width: "200px" }}
                alt="image"
              />
            </a>
          </div>
        ));
      return (
        <>
          <div className="container">
            <div
              className="row"
              style={{
                backgroundColor: "white",
                borderRadius: "7px",
                boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
              }}
            >
              <div class="col-sm-12" style={{ padding: "0px" }}>
                <div style={{ textAlign: "center", background: "#2C3B4C" }}>
                  <h3 style={{ color: "white", padding: "3px 0px" }}>
                    Employee Details
                  </h3>
                </div>
                <div className="col-sm-4">
                  <div>
                    <label>Employee Code :</label> {employee.employee_code}
                  </div>
                  <div>
                    <label>Name :</label> {employee.name}
                  </div>
                  <div>
                    <label>Mobile :</label> {employee.mobile}
                  </div>
                  <div>
                    <label>Working from:</label> {employee.working_from}
                  </div>
                  <div>
                    <label>Working_to:</label> {employee.working_to}
                  </div>
                  <div>
                    <label>State:</label> {employee.state}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div>
                    <label>Email :</label> {employee.email}
                  </div>
                  <div>
                    <label>contact1:</label> {employee.contact1}
                  </div>
                  <div>
                    <label>College Address:</label> {employee.college_address}
                  </div>
                  <div>
                    <label>Address:</label> {employee.address}
                  </div>
                  <div>
                    <label>Course:</label> {employee.course}
                  </div>
                  <div>
                    <label>Year of passing:</label> {employee.year_of_passing}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div>
                    <label>Contact2 :</label> {employee.contact2}
                  </div>
                  <div>
                    <label>University:</label> {employee.university}
                  </div>
                  <div>
                    <label>Institute:</label> {employee.institute}
                  </div>
                </div>
              </div>
              {documentList}
            </div>
          </div>
        </>
      );
    }
  }
}

function mapStateToProps(state) {
  const { employees } = state;
  return { employee: employees.selected_employee };
}
const connectedViewEmployeeDetails = connect(mapStateToProps)(
  ViewEmployeeDetails
);
export default connectedViewEmployeeDetails;
