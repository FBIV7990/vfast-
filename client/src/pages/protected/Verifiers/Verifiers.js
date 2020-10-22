import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { verifierActions, userActions } from "../../../actions";
import { history } from "../../../helpers";
import DataTable from "../../../components/DataTable";

class Verifiers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", statusChange: "BLOCKED" };
  }
  onViewRow(id) {
    history.push("/verifiers/view/" + id);
  }
  onEditRow(id) {
    history.push("/verifiers/" + id);
  }

  onActiveChanged(id, value) {
    //alert('Edit record')
    //console.log("Activate User", id);
    const data = {
      id: id,
      value: !value,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeActiveStatus(data));
  }
  onRoleChanged(id, role, e) {
    const data = {
      id: id,
      role: role,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeRole(data));
  }

  onStatusChanged(id) {
    // alert(id)
    const data = {
      id: id,
      status: this.state.statusChange,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeStatus(data));
    // this.setState({block:true});
  }

  onDeleteRow(id) {
    // alert(id)
    const data = {
      id: id,
    };
    const { dispatch } = this.props;
    dispatch(userActions.deleteUser(data));
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
      name: "Name",
      sortable: true,
      width: "180px",
      cell: (row) => (
        <div style={{ textTransform: "capitalize" }}>
          {row.profile.first_name} {row.profile.last_name}
        </div>
      ),
    },
    {
      name: "Status",
      selector: "account.status",
      sortable: true,
      width: "100px",
      cell: (row) => <div>{row.account.status}</div>,
    },
    {
      name: "Role",
      selector: "account.role",
      sortable: true,
      width: "100px",
      cell: (row) => <div>{row.account.role}</div>,
    },
    {
      name: "Mobile",
      selector: "profile.mobile",
      width: "100px",
      cell: (row) => (
        <div>{row.profile.mobile ? row.profile.mobile.mobile : "N/A"}</div>
      ),
    },
    {
      name: "Email",
      selector: "profile.email",
      width: "200px",
      cell: (row) => <div>{row.profile.email ? row.profile.email : "N/A"}</div>,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div class="btn-group" style={{ minWidth: "250px" }}>
          <div
            className="edit-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onEditRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-edit"></i>
            <a>
              <strong>Edit</strong>
            </a>
          </div>
          <div
            className="view-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onViewRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-eye"></i>
            <a>
              <strong>View</strong>
            </a>
          </div>
          <div
            className="delete-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onDeleteRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-trash"></i>
            <a>
              <strong>Delete</strong>
            </a>
          </div>
          <div
            className="block-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onStatusChanged(row._id);
            }}
          >
            <i
              style={{ fontSize: "13px" }}
              class={row.account.status != "BLOCKED" ? "fa fa-fw fa-ban" : ""}
            ></i>
            {/* <i class={row.account.active==true?'fa fa-fw fa-ban':'fa fa-check-circle-o'}></i> */}
            <a>
              <strong>
                {row.account.status != "BLOCKED" ? "Block" : "Unblock"}
              </strong>
            </a>
          </div>
        </div>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(verifierActions.getAll());
  }
  render() {
    const { verifiers } = this.props;

    return (
      <>
        {/* <Link  className='submit-button'  to="/verifiers/new" 
    >Add </Link> */}
        <DataTable
          title="Verifiers list"
          columns={this.columns}
          data={verifiers}
          onRowClicked={(row) => {
            this.onViewRow(row._id);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { verifiers, users } = state;

  return { verifiers: verifiers.verifiers };
}

const connectedVerifiers = connect(mapStateToProps)(Verifiers);
export default connectedVerifiers;
