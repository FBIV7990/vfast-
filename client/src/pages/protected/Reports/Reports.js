import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reportActions } from "../../../actions";
import { history } from "../../../helpers/history";
import DataTable from "../../../components/DataTable";

class Reports extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(reportActions.getAll());
  }

  onViewReport(data) {
    const { dispatch } = this.props;
    console.log("logging report data:", data);
    const id = data._id;
    if (data.education_check == true) {
      //  dispatch(reportActions.setSelectedReport(id));
      history.push("/reports/educationReport/" + id);
    } else if (data.address_check == true) {
      // dispatch(reportActions.setSelectedReport(id));
      history.push("/reports/addressReport/" + id);
    } else if (data.employment_check == true) {
      // dispatch(reportActions.setSelectedReport(id));
      history.push("/reports/employmentReport/" + id);
    }
  }

  columns = [
    {
      name: "Report ID",
      selector: "report_id",
      sortable: true,
    },
    {
      name: "Candidate Name",
      selector: "checkinfo.employee_name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "checkinfo.email",
      sortable: true,
    },
    {
      name: "Mobile",
      selector: "checkinfo.mobile",
      sortable: true,
    },
    {
      name: "Checkname",
      selector: "checkname",
      sortable: true,
    },
    {
      name: "View Report",
      cell: (row) => (
        <div
          className="rate-button"
          onClick={() => {
            this.onViewReport(row);
          }}
        >
          View Report
        </div>
      ),
    },
  ];
  render() {
    const { reports } = this.props;
    console.log("logging reports:", reports);
    return (
      <div>
        <DataTable
          title="Reports list"
          columns={this.columns}
          data={reports}
          onRowClicked={(row) => {
            this.onViewRow(row._id);
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { reports } = state;
  return { reports: reports.reports };
}

const connectedReports = connect(mapStateToProps)(Reports);
export default connectedReports;
