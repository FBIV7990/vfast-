import React from "react";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import verify from "../../../img/verify360-red.svg";
import { reportActions } from "../../../actions";
import { apiUrl } from "../../../helpers";
import Loader from "../../../components/Loader";
import moment from "moment";
import "./printform.css";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <div class="report-page">
          <div class="address-logoBackground">
            <img src={verify} style={{ width: 150, height: 60 }} />
          </div>

          <div class="report-title">
            <h4> Address Verification Report</h4>
          </div>

          <table>
            <tr>
              <td>Reference No.</td>
              <td> value={data.reference} </td>
            </tr>
            <tr>
              <td>Name of the Candidate</td>
              <td>{data.name}</td>
            </tr>

            <tr>
              <td>Address</td>
              <td>{data.address} </td>
            </tr>
            <tr>
              <td>Person Contacted</td>
              <td>{data.personContacted} </td>
            </tr>
            <tr>
              <td>Relation</td>
              <td>{data.relation} </td>
            </tr>
            <tr>
              <td>Contact Information</td>
              <td>{data.contact} </td>
            </tr>
            <tr>
              <td>Residential Status(Ownership/Rented)</td>
              <td>{data.residentialStatus}</td>
            </tr>
            <tr>
              <td>Period of Stay</td>
              <td>{data.stayPeriod} </td>
            </tr>
            <tr>
              <td>No. of Family Members</td>
              <td> value={data.familyMembers} </td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>{data.maritalStatus}</td>
            </tr>
            <tr>
              <td>Candidate's Age</td>
              <td>{data.age}</td>
            </tr>
            <tr>
              <td>Exterior Description of the House</td>
              <td>{data.houseExterior} </td>
            </tr>
            <tr>
              <td>Exterior Description of Apartment/Society(if Applicable)</td>
              <td>{data.apartmentExterior} </td>
            </tr>
            <tr>
              <td>Landmark(within 3 kms)</td>
              <td>{data.landmark}</td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>{data.comments} </td>
            </tr>
            <tr>
              <td style={{ height: "50px" }}>Signature of the Candidate</td>
              <td>{data.candidateSignature} </td>
            </tr>
            <tr>
              <td>Relationship ( If not the Candidate )</td>
              <td>{data.relationship} </td>
            </tr>
            <tr>
              <td>Name of the Representative Who Visited</td>
              <td>{data.visitedPerson} </td>
            </tr>
            <tr>
              <td style={{ height: "50px" }}>
                Signature of the Representative
              </td>
              <td>{data.representativeSignature} </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

class AddressReport extends React.Component {
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

const connectedAddressReport = connect(mapStateToProps)(AddressReport);
export default connectedAddressReport;
