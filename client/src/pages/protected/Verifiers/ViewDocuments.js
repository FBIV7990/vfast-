import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { verifierActions, userActions, leadActions } from "../../../actions";
import { apiUrl } from "../../../helpers";
import Loader from "../../../components/Loader";

class ViewDocuments extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch(leadActions.getByEmployeeId(id));
  }
  render() {
    const { leads } = this.props;
    console.log("check leads:", leads);
    if (leads) {
      const user = leads.employee_id;

      const documentList =
        user &&
        user.documents.map((lead) => (
          // <div style={{padding:'20px',float:'left',background:'white'}}>
          <a href={apiUrl + "/" + lead.filepath}>
            <img
              src={apiUrl + "/" + lead.filepath}
              style={{ height: "300px", width: "300px", padding: "20px" }}
            />
          </a>
          // </div>
        ));
      return (
        <>
          <h3>Documents</h3>

          {documentList}
        </>
      );
    } else return <Loader />;
  }
}
function mapStateToProps(state) {
  const { leads } = state;

  return { leads: leads.selected_lead };
}

const connectedViewDocuments = connect(mapStateToProps)(ViewDocuments);
export default connectedViewDocuments;
