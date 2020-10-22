import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  vendorActions,
  userActions,
  verificationActions,
} from "../../../actions";
import { history } from "../../../helpers";
import DataTable from "../../../components/DataTable";

class Verifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onViewRow(id) {
    history.push("/verifications/" + id);
  }
  onDeleteRow(id) {
    const data = {
      id: id,
    };
    const { dispatch } = this.props;
    // dispatch(userActions.deleteUser(data));
  }

  onRowClicked(data) {
    // const data={
    //   id:id}
    //   const {dispatch} =this.props;
    //   dispatch(userActions.deleteUser(data));

    console.log(data);
  }

  onstartVerify(data) {
    var path = "";
    switch (data.checkname) {
      case "pre_employment_check":
        path = "/employmentCheck";
        break;

      case "physical_check":
        path = "/physicalCheck";
        break;

      case "education_check":
        path = "/educationCheck";
        break;
    }
    // console.log(data.checkname);
    //history.push('/reports'+path)

    history.push({
      pathname: "/reports" + path,
      state: {
        data: data,
      },
    });
  }

  columns = [
    // {
    //   name: 'Id',
    //   selector: '_id',
    //   sortable: true,
    // },
    // {
    //     name: 'Name',
    //     selector: 'employee_id.name',
    //     sortable: true,
    //   },
    {
      name: "Check Name",
      selector: "checkname",
      sortable: true,
    },

    {
      name: "Price",
      selector: "vendor_cost",
      sortable: true,
    },
    {
      name: "Status",
      selector: (item) => <div className="ibadge info"> {item.status}</div>,
      sortable: true,
    },
    {
      name: "TAT",
      selector: "estimated_time",
      sortable: true,
    },

    {
      name: "Start verification",
      sortable: true,
      cell: (row) => (
        <>
          {" "}
          {row.status === "VERIFIED" ? (
            "VERIFIED"
          ) : (
            <div className="start-verif">
              <strong>
                <a
                  onClick={() => {
                    this.onstartVerify(row);
                  }}
                >
                  Start verification
                </a>
              </strong>
            </div>
          )}
        </>
      ),
    },

    {
      name: "Actions",
      cell: (row) => (
        <div class="btn-group">
          <a
            href="#"
            style={{ minWidth: "50px", fontSize: "11px", padding: "5px 6px" }}
            class="btn btn-light a-btn-slide-text"
            onClick={() => {
              this.onViewRow(row._id);
            }}
          >
            <span class="fa fa-fw fa-edit" aria-hidden="true"></span>
            <span>
              <strong>Edit</strong>
            </span>
          </a>

          <a
            href="#"
            style={{ minWidth: "50px", fontSize: "11px", padding: "5px 6px" }}
            class="btn btn-warning a-btn-slide-text"
            onClick={() => {
              this.onViewRow(row._id);
            }}
          >
            <span class="fa fa-fw fa-eye" aria-hidden="true"></span>
            <span>
              <strong>View</strong>
            </span>
          </a>
          <a
            href="#"
            style={{ minWidth: "50px", fontSize: "11px", padding: "5px 6px" }}
            class="btn btn-danger a-btn-slide-text"
            onClick={() => {
              this.onDeleteRow(row._id);
            }}
          >
            <span class="fa fa-fw fa-trash" aria-hidden="true"></span>
            <span>
              <strong>Delete</strong>
            </span>
          </a>
        </div>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(verificationActions.getAll());
  }
  render() {
    const { verifications } = this.props;
    console.log(verifications);
    return (
      <>
        <DataTable
          title="Verifications "
          columns={this.columns}
          data={verifications || []}
          onRowClicked={(row) => {
            this.onViewRow(row._id);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { verifications } = state;

  return { verifications: verifications.verifications };
}

const connectedVerifications = connect(mapStateToProps)(Verifications);
export default connectedVerifications;
