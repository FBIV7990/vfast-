import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import DataTable, { createTheme } from 'react-data-table-component';
import { verifierActions, userActions, leadActions } from "../../../actions";
import { history } from "../../../helpers";
import Popup from "reactjs-popup";
import "./style.css";
import { ModalContent } from "./ModalContent";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DataTable from "../../../components/DataTable";

class ViewLeads extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showModal: false, open: false };
  }

  showModal(lead, check) {
    console.log("Logging check and lead", check, lead);
    this.setState((state) => ({
      showModal: !state.showModal,
      check: check,
      lead: lead,
    }));
  }

  onOpenModal = (lead, check) => {
    // const {check,lead} = this.state;
    this.setState((state) => ({ open: !state.open, check: check, lead: lead }));
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onViewRow(id) {
    // history.push('/admin/verifiers/'+id)
  }

  onViewDocument(id) {
    history.push("/leads/document/" + id);
  }
  onActiveChanged(id, value) {
    //alert('Edit record')
    //console.log("Activate User", id);
    // const data={
    //   id:id,
    //   value:!value}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.changeActiveStatus(data));
  }
  onRoleChanged(id, role, e) {
    // const data={
    //   id:id,
    //   role:role}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.changeRole(data));
  }

  onStatusChanged(id, status) {
    // const data={
    //   id:id,
    //   status:status}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.changeStatus(data));
  }

  onDeleteRow(id) {
    // const data={
    //   id:id}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.deleteUser(data));
  }

  onRowClicked(data) {
    // const data={
    //   id:id}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.deleteUser(data));

    console.log(data);
  }

  columns = [
    {
      name: "Company",
      selector: "employer_id.profile.company_name",
      sortable: true,
    },

    {
      name: "Employee UID",
      selector: "employee_id.unique_id",
      sortable: true,
    },
    {
      name: "Employee",
      selector: "employee_id.name",
      sortable: true,
    },

    {
      name: "State",
      selector: "employee_id.state",
      width: "80px",
      sortable: true,
    },
    {
      name: "Documents",
      width: "90px",
      cell: (row) => (
        <div>
          <button
            style={{ padding: "4px 12px", fontSize: "13px" }}
            className="btn btn-info"
            onClick={() => {
              this.onViewDocument(row._id);
            }}
          >
            View
          </button>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Physical Check",
      width: "130px",
      cell: (row) => (
        <div>
          {row.physical_check && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "physical_check");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },

    {
      name: "Education Check",
      width: "130px",
      cell: (row) => (
        <div>
          {row.education_check && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "education_check");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Pre Employment Check",
      width: "130px",
      cell: (row) => (
        <div>
          {row.pre_employment_check && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "pre_employment_check");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Judicial Check",
      width: "130px",
      cell: (row) => (
        <div>
          {row.judicial_check && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "judicial_check");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "CIBIL Check",
      width: "130px",
      cell: (row) => (
        <div>
          {row.cibil_check && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "cibil_check");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "DRUG Test",
      width: "130px",
      cell: (row) => (
        <div>
          {row.drug_test && (
            <button
              className="btn btn-primary"
              style={{ padding: "4px 6px", fontSize: "13px" }}
              onClick={() => {
                this.onOpenModal(row, "drug_test");
              }}
            >
              Assign Vendor
            </button>
          )}
        </div>
      ),
      sortable: true,
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(leadActions.getAll());
  }
  render() {
    const { leads } = this.props;
    const { lead, check, open } = this.state;
    return (
      <>
        <div class="card">
          <div class="card-body">
            <h3 style={{ padding: 10, borderBottom: "2px solid #F5F5F5" }}>
              All Leads
            </h3>

            <DataTable
              title="All Leads"
              columns={this.columns}
              data={leads}
              onRowClicked={(row) => {
                this.onViewRow(row._id);
              }}
            />
            <Modal open={open} onClose={this.onCloseModal} center>
              <ModalContent lead={lead} check={check} />
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { leads } = state;

  return { leads: leads.leads };
}

const connectedViewLeads = connect(mapStateToProps)(ViewLeads);
export default connectedViewLeads;
