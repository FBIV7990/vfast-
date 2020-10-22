import React from "react";
import { connect } from "react-redux";

import {
  vendorActions,
  verifierActions,
  verificationActions,
  employerActions,
} from "../../../actions";
import DataTable from "../../../components/DataTable";

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVendor: null,
      selected_rates: null,
      vendor_cost: 1,
      employer_cost: 1,
      estimated_time: 1,
      remark: "",
    };
  }

  onChange(e) {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  }

  componentDidMount() {
    const { dispatch, lead } = this.props;

    if (lead) {
      dispatch(vendorActions.getByState(lead.employee_id.state));
      dispatch(employerActions.getRates(lead.employer_id._id));
    }
  }

  onRowClicked(row) {
    this.setState({
      selectedVendor: row,
      estimated_time: row.turn_around_time,
    });
  }

  onAssignLead() {
    const { lead, check, dispatch } = this.props;
    const {
      selectedVendor,
      vendor_cost,
      employer_cost,
      estimated_time,
      remark,
    } = this.state;

    if (employer_cost > 0 && vendor_cost > 0 && estimated_time > 0) {
      const data = {
        lead_id: lead._id,
        verifier_id: lead.employer_id._id,
        vendor_id: selectedVendor.id,
        checkname: check,
        vendor_cost: vendor_cost,
        employer_cost: employer_cost,
        estimated_time: estimated_time,
        remark: remark,
      };
      console.log(data);
      dispatch(verificationActions.add(data));
    } else alert("Please fill mandatory fields");
  }

  render() {
    const { vendors, check, employer_rates, lead } = this.props;
    const { selectedVendor } = this.state;

    const panIndiaRates =
      employer_rates && employer_rates.pan_india_rates[check];
    const stateRates =
      employer_rates &&
      employer_rates.state_rates.find(
        (item) => item.state == lead.employee_id.state
      )[check];

    const columns = [
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Mobile",
        selector: "mobile",
        sortable: true,
      },
      {
        name: "Email",
        selector: "email",
        sortable: true,
      },

      {
        name: "Rates Rural",

        cell: (row) => (
          <div>
            <div>
              {row.rates[check].rural.min}-{row.rates[check].rural.max}
            </div>
          </div>
        ),
      },
      {
        name: "Rates Urban ",

        cell: (row) => (
          <div>
            <div>
              {row.rates[check].urban.min}-{row.rates[check].urban.max}
            </div>
          </div>
        ),
      },

      {
        name: "TAT",

        cell: (row) => <div>{row.rates[check].turn_around_time}</div>,
      },
    ];
    return (
      <div className="verifier-modal">
        <div>
          <h3 style={{ padding: "10px 20px" }}> Vendors</h3>
        </div>

        {employer_rates && (
          <div style={{ padding: 10, backgroundColor: "aqua" }}>
            <div className="row" style={{ padding: 0 }}>
              <div className="col-sm-2">
                <h4>Client Rates</h4>
              </div>
              <div className="col-sm-10">
                <div className="row" style={{ padding: 0 }}>
                  <div className="col-sm-2">
                    {" "}
                    <h5>Pan India Rates</h5>
                  </div>
                  <div className="col-sm-2">
                    {" "}
                    <h5>TAT time</h5>
                  </div>
                  <div className="col-sm-3">
                    <h5>Rural area Rates</h5>
                  </div>
                  <div className="col-sm-3">
                    <h5>Urban area Rates</h5>{" "}
                  </div>
                  <div className="col-sm-2">
                    {" "}
                    <h5>State TAT time</h5>
                  </div>
                </div>

                <div className="row" style={{ padding: 0 }}>
                  <div className="col-sm-2">
                    <span className="ibadge success">
                      {panIndiaRates.pricemin}-{panIndiaRates.pricemax}
                    </span>
                  </div>

                  <div className="col-sm-2">
                    <span className="ibadge info">
                      {panIndiaRates.turn_around_time}
                    </span>
                  </div>
                  <div className="col-sm-3">
                    <span className="ibadge warning">
                      {stateRates.rural.min}-{stateRates.rural.max}
                    </span>
                  </div>
                  <div className="col-sm-3">
                    <span className="ibadge warning">
                      {" "}
                      {stateRates.urban.min}-{stateRates.urban.max}
                    </span>
                  </div>

                  <div className="col-sm-2">
                    <span className="ibadge primary">
                      {" "}
                      {stateRates.turn_around_time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedVendor && (
          <div
            className="row"
            style={{ backgroundColor: "lightgrey", margin: 0 }}
          >
            <div className="col-sm-2">
              <div style={{ margin: 5 }}>
                <div style={{ fontSize: 16, fontWeight: 400 }}>
                  {" "}
                  Vendor Cost
                </div>
                <input
                  name="vendor_cost"
                  style={{ height: 40, fontSize: "18px", width: "100%" }}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div style={{ margin: 5 }}>
                <div style={{ fontSize: 16, fontWeight: 400 }}>
                  {" "}
                  Client Cost
                </div>
                <input
                  name="employer_cost"
                  style={{ height: 40, fontSize: "18px", width: "100%" }}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div style={{ margin: 5 }}>
                <div style={{ fontSize: 16, fontWeight: 400 }}> TAT</div>
                <input
                  type="number"
                  name="estimated_time"
                  style={{ height: 40, fontSize: "18px", width: "100%" }}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-5">
              <div style={{ margin: 5 }}>
                <div style={{ fontSize: 16, fontWeight: 400 }}> Remarks</div>
                <textarea
                  name="remark"
                  style={{ height: 40, fontSize: "18px", width: "100%" }}
                  onChange={(e) => {
                    this.onChange(e);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="col-sm-1">
              <div style={{ marginTop: 30 }}>
                <button
                  className="btn btn-primary"
                  style={{ background: "#2C3B4C" }}
                  onClick={() => this.onAssignLead()}
                >
                  Assign{" "}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="content">
          <DataTable
            title="Vendors list"
            columns={columns}
            data={vendors || []}
            onRowClicked={(row) => {
              this.onRowClicked(row);
            }}
          />
        </div>
      </div>

      // </div>
    );
  }
}

function mapStateToProps(state) {
  const { vendors, employers } = state;

  return { vendors: vendors.vendors, employer_rates: employers.rates };
}

const connectedModalContent = connect(mapStateToProps)(ModalContent);
export { connectedModalContent as ModalContent };
