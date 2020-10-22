import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import vfast from "../../../img/VFast-white.png";
import Loader from "../../../components/Loader";
import { reportActions } from "../../../actions";
import moment from "moment";
import "./printform.css";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_name: "FBIV Infocomm Pvt Ltd",
      client_address: "D-2/6 Krishna Nagar Delhi-110051",
    };
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <div class="report-page">
          <div class="report-border" style={{ padding: "35px 0px 20px 20px" }}>
            <div class="report-logoBackground" style={{ marginTop: "20px" }}>
              <img src={vfast} style={{ width: "100%", height: "auto" }} />
            </div>
            <h5 class="report-address">{this.state.client_name}</h5>
            <h5 class="report-address">{this.state.client_address}</h5>
          </div>
          <div class="report-title">
            <h4> Education Report</h4>
          </div>

          <div class="report-table">
            <table>
              <tr>
                <td>Order ID</td>
                <td>{data._id} </td>

                <td>Employee Name</td>
                <td colspan="3">{data.checkinfo.employee_name} </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{data.checkinfo.gender}</td>

                <td>Date of Birth</td>
                <td> {moment(data.checkinfo.dob).format("DD/MM/YYYY")}</td>
                <td>Birth Place</td>
                <td>{data.checkinfo.birthplace}</td>
              </tr>

              <tr>
                <td>Mobile Number</td>
                <td colspan="2">{data.checkinfo.mobile} </td>
                <td>Email</td>
                <td colspan="2">{data.checkinfo.email} </td>
              </tr>
              <tr>
                <td>Fathers Name</td>
                <td colspan="2">{data.checkinfo.fathername} </td>

                <td>Mothers Name</td>
                <td colspan="2">{data.checkinfo.mothername}</td>
              </tr>
              <tr>
                <td>Language Spoken</td>
                <td>{data.checkinfo.language}</td>
                <td>Aadhar Number</td>
                <td>{data.checkinfo.aadhar_number} </td>
                <td>Introduced By</td>
                <td>{data.checkinfo.introduced_by}</td>
              </tr>
              <tr>
                <td>Height(in CMS)</td>
                <td>{data.checkinfo.height} </td>
                <td>Identity Mark</td>
                <td colspan="3">{data.checkinfo.identity_mark} </td>
              </tr>
            </table>

            <table style={{ height: "180px", width: "100%" }}>
              <tr>
                <td colspan="4" style={{ textAlign: "center" }}>
                  Academic Details
                </td>
              </tr>
              <tr>
                <td>University Name</td>
                <td>{data.checkinfo.university} </td>
                <td>Course</td>
                <td>{data.checkinfo.course} </td>
              </tr>
              <tr>
                <td>Address</td>
                <td colspan="3">{data.checkinfo.address} </td>
              </tr>
              <tr>
                <td>Year of Passing</td>
                <td>{this.state.year_of_passing}</td>
                <td>Total year of Course</td>
                <td>{data.checkinfo.course_duration}</td>
              </tr>
            </table>

            <table style={{ height: "120px", width: "100%" }}>
              <tr>
                <td>Name of person Met at Home</td>
                <td>{data.checkinfo.person_met_at_home} </td>
              </tr>
              <tr>
                <td>Aadhar Card Number</td>
                <td>{data.checkinfo.person_aadhar} </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

class EducationReport extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch(reportActions.getById(id));
  }
  render() {
    const { report } = this.props;

    if (report)
      return (
        <div>
          <ReactToPrint
            trigger={() => <div className="submit-button">Print Report</div>}
            content={() => this.componentRef}
          />
          <div class="container" style={{ marginLeft: "242px", width: "100%" }}>
            <ComponentToPrint
              data={report}
              ref={(el) => (this.componentRef = el)}
            />
          </div>
        </div>
      );
    else return <Loader />;
  }
}

function mapStateToProps(state) {
  const { reports } = state;

  return { report: reports.report };
}

const connectedEducationReport = connect(mapStateToProps)(EducationReport);
export default connectedEducationReport;
