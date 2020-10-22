import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../../actions";
import { history } from "../../../helpers";
import DataTable from "../../../components/DataTable";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", statusChange: "BLOCKED" };
  }

  onEditRow(id) {
    history.push(`/users/${id}`);
  }

  onViewRow(id) {
    history.push(`/view/${id}`);
  }
  onActiveChanged(id, value) {
    const data = {
      id: id,
      value: !value,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeActiveStatus(data));
  }

  onRoleChanged(id, role) {
    const data = {
      id: id,
      role: role,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeRole(data));
  }

  onStatusChanged(id) {
    alert(id);
    const data = {
      id: id,
      status: this.state.statusChange,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeStatus(data));
    // this.setState({block:true});
  }

  onDeleteRow(id) {
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
      name: "Firstname",
      selector: "profile.first_name",
      cell: (row) => (
        <div>
          {row.profile.first_name} {row.profile.last_name}
        </div>
      ),
      width: "120px",
    },
    {
      name: "Status",
      selector: "account.status",
      sortable: true,
      width: "80px",
    },
    {
      name: "Role",
      selector: "account.role",
      sortable: true,
      width: "100px",
    },
    {
      name: "Mobile",
      selector: "profile.mobile",
      cell: (row) => (
        <div>{row.profile.mobile ? row.profile.mobile.mobile : "N/A"}</div>
      ),
      width: "100px",
    },
    {
      name: "Email",
      selector: "profile.email",
      cell: (row) => <div>{row.profile.email ? row.profile.email : "N/A"}</div>,
      width: "180px",
    },
    {
      //     name: 'Actions',
      //    cell: row => <div class="btn-group" style={{minWidth:'220px'}}>
      //     <a href="#"  class="btn btn-light a-btn-slide-text" onClick={()=>{this.onViewRow(row._id)}}>
      //     <span class="fa fa-fw fa-edit" aria-hidden="true"></span>
      //     <span><strong>Edit</strong></span>
      // </a>

      //    <a href="#"  class="btn btn-warning a-btn-slide-text" onClick={()=>{this.onViewRow(row._id)}}>
      //     <span class="fa fa-fw fa-eye" aria-hidden="true"></span>
      //     <span><strong>View</strong></span>
      // </a>
      //    <a href="#" class="btn btn-danger a-btn-slide-text"  onClick={()=>{this.onDeleteRow(row._id)}}>
      //    <span class="fa fa-fw fa-trash" aria-hidden="true"></span>
      //     <span><strong>Delete</strong></span>
      // </a>
      // <a href="#" class="btn btn-primary a-btn-slide-text"  onClick={()=>{this.onDeleteRow(row._id)}}>
      //    {/* <span class="fa fa-fw fa-trash" aria-hidden="true"></span> */}
      //     <span><strong> {row.account.active==true? "block":"unblock" }</strong></span>
      // </a>
      //  </div>,
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
    dispatch(userActions.getAll());
  }

  render() {
    const { users } = this.props;
    console.log("logging usersAll:", users);

    return (
      <>
        {/* <Link className='submit-button' to="/users/new" > Add</Link> */}

        <DataTable
          title="Users list"
          columns={this.columns}
          data={users}
          onRowClicked={(row) => {
            this.onViewRow(row._id);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  return { users: users.users };
}

const connectedUsers = connect(mapStateToProps)(Users);
export default connectedUsers;
