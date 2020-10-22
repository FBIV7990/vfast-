import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { vendorActions, userActions, invoiceActions } from "../../../actions";
import { history } from "../../../helpers";
import DataTable from "../../../components/DataTable";
import moment from "moment";

class Invoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onViewRow(id) {
    history.push("/invoices/" + id);
  }
  onDeleteRow(id) {
    const data = {
      id: id,
    };
  }

  onRowClicked(data) {
    console.log(data);
  }

  columns = [
    {
      name: "Inv No.",
      selector: "invoice_num",
      sortable: true,
    },
    {
      name: "Date",
      selector: (item) => <div>{moment(item.date).format("DD/MM/YYYY")}</div>,
      sortable: true,
    },

    {
      name: "Price",
      selector: "total_price",
      sortable: true,
    },
    {
      name: "Status",
      selector: (item) => <div className="ibadge info"> {item.status}</div>,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div class="btn-group">
          <a
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
    dispatch(invoiceActions.getAll());
  }
  render() {
    const { invoices } = this.props;
    console.log(invoices);
    return (
      <>
        <DataTable
          title="Verifications "
          columns={this.columns}
          data={invoices || []}
          onRowClicked={(row) => {
            this.onViewRow(row._id);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { invoices } = state;

  return { invoices: invoices.invoices };
}

const connectedInvoices = connect(mapStateToProps)(Invoices);
export default connectedInvoices;
