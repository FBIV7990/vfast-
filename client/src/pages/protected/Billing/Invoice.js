import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import verify from "../../../img/verify360-red.svg";
import vfast from "../../../img/VFast-white.png";
import "../Reports/printform.css";
import ReactToPrint from "react-to-print";
import { invoiceActions } from "../../../actions";
import Loader from "../../../components/Loader";
import moment from "moment";

class ComponentToPrint extends React.Component {
  render() {
    const { data } = this.props;
    const client = data && data.employer_id.profile;

    return (
      <>
        <div class="report-page" style={{ padding: "20px" }}>
          <div
            class="report-border"
            style={{
              padding: "10px 0px 20px 20px",
              height: "200px",
              borderBottom: "2px solid #5bbce4",
            }}
          >
            <div
              class="report-logoBackground"
              style={{
                marginTop: "20px",
                float: "left",
                height: "100px",
                width: "250px",
              }}
            >
              <img
                src={vfast}
                style={{ width: "100%", height: "auto", float: "left" }}
              />
            </div>

            <div style={{ float: "right" }}>
              <label style={{ float: "right" }}>
                FBIV INFOCOMM PVT. LTD.
                <br />
                D-2/6, KRISHAN NAGAR,
                <br />
                DELHI-110051(INDIA)
                <br />
                Contact : 011-41002777,
                <br />
                45502777, 1800 572 7797
                <br />
                Email : info@vfast.in
                <br />
                Web : www.vfast.co.in
                <br />
                GST : 07AADCF7200K1ZR
              </label>
            </div>
          </div>

          <div className="bill-customer-detail">
            <table style={{ width: "100%" }} border="1">
              <tr>
                <td>
                  <h4>Customer Details</h4>
                  {client && (
                    <>
                      <div>{client.company_name}</div>
                      <div>
                        {client.shipping_address.street +
                          ", " +
                          client.shipping_address.city +
                          ", " +
                          client.shipping_address.state +
                          ", " +
                          client.shipping_address.country}
                      </div>
                    </>
                  )}
                  <div>
                    {" "}
                    GSTIN :
                    {data.statutary_details && data.statutary_details.gstin}
                  </div>
                </td>
                <td>
                  <h4>Billing Details</h4>
                  {client && (
                    <>
                      <div>{client.company_name}</div>
                      <div>
                        {client.billing_address.street +
                          ", " +
                          client.billing_address.city +
                          ", " +
                          client.billing_address.state +
                          ", " +
                          client.billing_address.country}
                      </div>
                    </>
                  )}
                  <div>
                    {" "}
                    GSTIN :
                    {data.statutary_details && data.statutary_details.gstin}
                  </div>
                </td>
                <td>
                  Original for Recipient
                  <div>INVOICE NO: {data.invoice_num}</div>
                  <h5>Date : {moment(data.date).format("DD/MM/YYYY")}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div className="bill" cellpadding="5px" cellspacing="10px">
            <table style={{ height: 400, textAlign: "center" }}>
              <thead style={{ borderBottom: "2px solid #5bbce4" }}>
                <tr>
                  <th>NO</th>
                  <th>PRODUCT/SERVICE NAME</th>
                  <th>HSN CODE </th>
                  <th>QNTY. </th>
                  <th>QNTY. PRICE </th>
                  <th>SGST </th>
                  <th>IGST </th>
                  <th>CGST </th>
                  <th>AMOUNT </th>
                </tr>
              </thead>

              <tbody>
                {data.services.map((service, i) => (
                  <tr style={{ height: "40px" }}>
                    <td>{i + 1}</td>
                    <td>{service.service}</td>
                    <td>{service.hsn_code}</td>
                    <td>{service.quantity}</td>
                    <td>{service.price}</td>
                    <td>{service.sgst}</td>
                    <td>{service.cgst}</td>
                    <td>{service.igst}</td>
                    <td>{service.amount}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ float: "left", width: "60%" }}>
              <div
                style={{
                  float: "left",
                  textTransform: "capitalize",
                  fontSize: 14,
                }}
              >
                Total:Rupees {data.amount_in_words}
              </div>
              {/* <h4 style={{color:'blue',float:'left',textDecoration:'underline',width:'70%'}}></h4> */}
              <h5
                style={{
                  float: "left",
                  color: "#5bbce4",
                  fontWeight: 600,
                  width: "70%",
                  height: "70px",
                }}
              >
                AUTHORISED SIGNATORY
              </h5>
            </div>
            <div style={{ float: "right", width: "40%" }}>
              <div>
                <table
                  border="0"
                  cellSpacing={0}
                  cellPadding={0}
                  style={{ height: 120 }}
                >
                  <tr>
                    <td> TOTAL BEFORE TAX</td> <td>₹{data.total_price}</td>
                  </tr>
                  <tr>
                    <td>DISCOUNT</td> <td> ₹{data.discount}</td>
                  </tr>
                  <tr>
                    <td>TOTAL TAX AMOUNT</td> <td>₹{data.discount}</td>
                  </tr>
                  <tr>
                    <td>TOTAL AMOUNT</td> <td>₹{data.total_amount}</td>
                  </tr>
                </table>
              </div>
            </div>

            <h5
              style={{
                float: "left",
                color: "#5bbce4",
                fontWeight: 600,
                width: "70%",
              }}
            >
              Terms and Conditions:
            </h5>
            <div style={{ float: "left", color: "black", fontWeight: 500 }}>
              <ul style={{ listStyleType: "none" }}>
                {data.termsandConditions.map((condition) => (
                  <li>{condition}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Invoice extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    if (id) dispatch(invoiceActions.getById(id));
  }

  render() {
    const { invoice } = this.props;
    if (invoice)
      return (
        <div>
          <ReactToPrint
            trigger={() => <div className="submit-button">Print Invoice</div>}
            content={() => this.componentRef}
          />
          <div class="container" style={{ marginLeft: "242px", width: "100%" }}>
            <ComponentToPrint
              ref={(el) => (this.componentRef = el)}
              data={invoice}
            />
          </div>
        </div>
      );
    else return <Loader />;
  }
}

function mapStateToProps(state) {
  const { invoices } = state;
  return { invoice: invoices.invoice };
}

const connectedInvoice = connect(mapStateToProps)(Invoice);
export default connectedInvoice;
