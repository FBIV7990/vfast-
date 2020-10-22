import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { userActions } from "../../../actions";
import userImage from "../../../img/userImage.jpg";
import { apiUrl } from "../../../helpers";

class ViewUser extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    //    alert(id)
    const { user } = this.props;
    dispatch(userActions.getById(id));
  }
  render() {
    const { user, alert } = this.props;
    console.log("loggīng edituser:", user);
    if (user) {
      const { account, profile, statutary_details } = user;
      return (
        <>
          <div className="container">
            <div
              className="row"
              style={{
                backgroundColor: "white",
                borderRadius: "7px",
                boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
              }}
            >
              <div class="col-sm-12" style={{ padding: "0px" }}>
                <div className="col-sm-4">
                  <div>
                    <img
                      src={
                        apiUrl + "/" + profile.profile_picture
                          ? apiUrl + "/" + profile.profile_picture
                          : userImage
                      }
                      style={{ height: "300px", width: "300px" }}
                    />
                  </div>
                  <div
                    style={{
                      background: "#eaeaea",
                      padding: "10px",
                      margin: "10px",
                    }}
                  >
                    <div>
                      <label>Username : </label>
                      {account.username}
                    </div>
                    <div>
                      <label>Role :</label> {account.role}
                    </div>
                    <div>
                      <label>Status :</label> {account.status}
                    </div>

                    <div>
                      <label>Username : </label>
                      {profile.first_name}
                    </div>
                    <div>
                      <label>Lastname :</label> {profile.last_name}
                    </div>
                    <div>
                      <label>Email :</label> {profile.email}
                    </div>
                    <div>
                      <label>Mobile :</label> {profile.mobile.mobile}
                    </div>
                    <div>
                      <label>Company Name :</label> {profile.company_name}
                    </div>
                    <div>
                      <label>Company type:</label> {profile.company_category}
                    </div>
                    <div>
                      <label>Owner status:</label> {profile.owner_status}
                    </div>
                  </div>
                </div>

                <div className="col-sm-8 vl" style={{ height: "630px" }}>
                  <div style={{ textAlign: "center", background: "#2C3B4C" }}>
                    <h3 style={{ color: "white", padding: "3px 0px" }}>
                      Profile Info
                    </h3>
                  </div>
                  <div className="col-sm-12 " style={{ padding: "0px" }}>
                    <div className="col-sm-6">
                      <h3>Billing Address</h3>

                      <div>
                        <label>City :</label> {profile.billing_address.city}
                      </div>
                      <div>
                        <label>State :</label> {profile.billing_address.state}
                      </div>
                      <div>
                        <label>Street :</label> {profile.billing_address.street}
                      </div>
                      <div>
                        <label>Country :</label>{" "}
                        {profile.billing_address.country}
                      </div>
                      <div>
                        <label>Fax :</label> {profile.billing_address.fax.std}-
                        {profile.billing_address.fax.fax}
                      </div>
                      <div>
                        <label>Landline :</label>{" "}
                        {profile.billing_address.landline.std}-
                        {profile.billing_address.landline.landline}
                      </div>
                      <div>
                        <label>Zip :</label> {profile.billing_address.zip}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h3>Shipping Address</h3>
                      {/* <div><label>ID :</label> 
      <img src={profile.company_logo} style={{height:'100px',width:'100px'}} /></div> */}
                      <div>
                        <label>City :</label> {profile.shipping_address.city}
                      </div>
                      <div>
                        <label>State :</label> {profile.shipping_address.state}
                      </div>
                      <div>
                        <label>Street :</label>{" "}
                        {profile.shipping_address.street}
                      </div>
                      <div>
                        <label>Country :</label>{" "}
                        {profile.shipping_address.country}
                      </div>
                      <div>
                        <label>Fax :</label> {profile.shipping_address.fax.std}-
                        {profile.shipping_address.fax.fax}
                      </div>
                      <div>
                        <label>Landline :</label>{" "}
                        {profile.shipping_address.landline.std}-
                        {profile.shipping_address.landline.landline}
                      </div>
                      <div>
                        <label>Zip :</label> {profile.shipping_address.zip}
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12" style={{ padding: "0px" }}>
                    <h3>Statutary details</h3>
                    <div className="col-sm-6">
                      <div>
                        <label>Cin number :</label>{" "}
                        {statutary_details.cin_number}
                      </div>
                      <div>
                        <label>Pan number :</label>{" "}
                        {statutary_details.pan_number}
                      </div>
                      <div>
                        <label>Gstin:</label> {statutary_details.gstin}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <label>Gst Certificate:</label>
                        <img
                          src={apiUrl + "/" + statutary_details.gst_certificate}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ padding: "0px" }}>
                    <h3>Business card</h3>
                    <div className="col-sm-6">
                      <div>
                        <label>Bussiness card-front :</label>
                        <img
                          src={apiUrl + "/" + profile.business_card.front}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <label>Other Document:</label>
                        <img
                          src={apiUrl + "/" + profile.business_card.back}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else return <h2>Loading....</h2>;
  }
}

function mapStateToProps(state) {
  const { users, alert } = state;
  console.log("logging user:", users);
  return { user: users.selected_user, users, alert, saveUser: users.user };
}
const connectedViewUser = connect(mapStateToProps)(ViewUser);
export default connectedViewUser;
