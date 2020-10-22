import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { userActions, verifierActions } from "../../../actions";
import Loader from "../../../components/Loader";
import moment from "moment";
import { apiUrl } from "../../../helpers";

class EditVerifier extends React.Component {
  constructor(props) {
    super(props);
    this.avatar = React.createRef();
    this.logoFile = React.createRef();
    this.bannerFileFront = React.createRef();
    this.bannerFileBack = React.createRef();
    this.gstFile = React.createRef();
    this.state = {
      accountState: "",
      accountRole: "",
      password: "",
      mobile: "",
      email: "",
      first_name: "",
      last_name: "",
      company: "",
      profile: "",
      isLoaded: false,
      username: "",
      profile: "",
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    const id = this.props.match.params.id;
    dispatch(userActions.getById(id));

    const { user } = this.props;
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (!this.state.isLoaded && user) {
      this.setState({
        first_name: user.profile.first_name,
        last_name: user.profile.last_name,
        username: user.account.username,
        email: user.profile.email,
        mobile: user.profile.mobile.mobile,
        profile: apiUrl + "/" + user.profile.profile_picture,
        isLoaded: true,
      });
    }
  }
  onRoleChanged(id, role) {
    const data = {
      id: id,
      role: role,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeRole(data));
  }

  onStatusChanged(id, status) {
    const data = {
      id: id,
      status: status,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeStatus(data));
  }
  onSubmit() {
    const { user } = this.props;
    const {
      profile,
      first_name,
      last_name,
      email,
      mobile,
      username,
    } = this.state;
    const formdata = new FormData();
    const id = user._id;
    formdata.append("id", id);
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("mobile", mobile);
    formdata.append("email", email);
    // formdata.append('username',username);
    // if(this.avatar.current.files[0])
    // formdata.append('profile_picture',this.avatar.current.files[0]);

    const { dispatch } = this.props;
    dispatch(verifierActions.editVerifier(formdata));
  }

  onChangeGst() {
    // Assuming only image
    var file = this.gstFile.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        gstCertificate: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?
    // TODO: concat files
  }
  onChangeLogo() {
    // Assuming only image
    var file = this.avatar.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        profile: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?
    // TODO: concat files
  }
  onChangebannerFront() {
    // Assuming only image
    var file = this.bannerFileFront.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        bannerFront: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?
    // TODO: concat files
  }

  onCheckValue() {
    const {
      shippingState,
      shippingLandlinestd,
      shippingStreet,
      shippingZip,
      shippingCountry,
      shippingFax,
      shippingFaxstd,
      shippingLandline,
      shippingCity,
    } = this.state;
    this.setState({
      billStreet: shippingStreet,
      billCity: shippingCity,
      billCountry: shippingCountry,
      billFax: shippingFax,
      billFaxstd: shippingFaxstd,
      billLandline: shippingLandline,
      billLandlinestd: shippingLandlinestd,
      billState: shippingState,
      billZip: shippingZip,
    });
  }

  onRoleChanged(id, role) {
    const data = {
      id: id,
      role: role,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeRole(data));
  }

  onStatusChanged(id, status) {
    const data = {
      id: id,
      status: status,
    };
    const { dispatch } = this.props;
    dispatch(userActions.changeStatus(data));
  }
  onChangebannerBack() {
    // Assuming only image
    var file = this.bannerFileBack.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        bannerBack: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?
    // TODO: concat files
  }
  onChangeValue(e, key) {
    this.setState({ [key]: e.target.value });
  }
  render() {
    const { user, alert } = this.props;

    const { profile } = this.state;
    console.log("logging profile:", profile);
    if (user) {
      const { account, profile, statutary_details } = user;
      return (
        <>
          <div className="container">
            <div className="row">
              {/* <div className='col-sm-12' style={{minWidth:'300px'}}> */}

              {/* <div><label>Active : </label> {account.active?"ACTIVE":"INACTIVE"}</div> */}
              <div
                className="col-sm-12"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  margin: "10px 0px",
                  borderRadius: "7px",
                  boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
                }}
              >
                <div className="col-sm-12">
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <h3
                      style={{
                        background: "#2C3B4C",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Account Info
                    </h3>
                  </div>
                  {/* <div className='vl'></div> */}
                  <div className="col-sm-8 ">
                    <div className="col-sm-12">
                      <div className="col-sm-6">
                        <div>
                          <label>Username : </label>
                          {this.state.username}
                        </div>
                        <div>
                          <label>Created On :</label>{" "}
                          {moment(account.created_on).format("DD/MM/YYYY")}
                        </div>
                        <div>
                          <label>Account Status :</label>
                          <br />

                          <select
                            value={account.status}
                            onChange={(e) => {
                              this.onStatusChanged(user._id, e.target.value);
                            }}
                          >
                            <option name="PENDING">PENDING</option>
                            <option name="VERIFIED">VERIFIED</option>
                            <option name="REGISTERED">REGISTERED</option>
                            <option name="BLOCKED">BLOCKED</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label>ID :</label> {user._id}
                        </div>
                        <div>
                          <label>Display ID : </label>
                          {user.display_id}
                        </div>
                        <div>
                          <label>Role :</label> <br />
                          {/* {account.role} */}
                          <select
                            value={account.role}
                            onChange={(e) => {
                              this.onRoleChanged(user._id, e.target.value);
                            }}
                          >
                            <option name="VERIFIER">VERIFIER</option>
                            <option name="EMPLOYER">EMPLOYER</option>
                            <option name="VENDOR">VENDOR</option>
                            <option name="ADMIN">ADMIN</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="col-sm-6">
                        <div>
                          <label>Username</label> <br />
                          <input
                            className="form-input"
                            type="text"
                            value={this.state.username}
                            placeholder="Email or Mobile"
                            onChange={(event) => {
                              this.onChangeValue(event, "username");
                            }}
                          />{" "}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label>Mobile</label>
                          <br />
                          <input
                            className="form-input"
                            type="number"
                            value={this.state.mobile}
                            placeholder="Mobile"
                            onChange={(event) => {
                              this.onChangeValue(event, "mobile");
                            }}
                          />{" "}
                        </div>
                        {/* <div><label>Password</label> <br/><input className='form-input' type="password" 
  value={this.state.password}
   placeholder='Password'
   onChange={(event)=>{this.onChangeValue(event,'password')}} /> </div> */}
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="col-sm-6">
                        <div>
                          <label>First name</label> <br />
                          <input
                            className="form-input"
                            type="text"
                            value={this.state.first_name}
                            placeholder="First name"
                            onChange={(event) => {
                              this.onChangeValue(event, "first_name");
                            }}
                          />{" "}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <label>Last name</label> <br />
                          <input
                            className="form-input"
                            type="text"
                            value={this.state.last_name}
                            placeholder="Last name"
                            onChange={(event) => {
                              this.onChangeValue(event, "last_name");
                            }}
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="col-sm-6">
                        <div>
                          <label>Email</label> <br />
                          <input
                            className="form-input"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => {
                              this.onChangeValue(event, "email");
                            }}
                          />{" "}
                        </div>
                      </div>
                      <div className="col-sm-6"></div>
                    </div>
                  </div>
                  <div className="col-sm-4 vl">
                    <div>
                      <label>Profile picture</label>
                      <br />{" "}
                    </div>
                    <img
                      src={this.state.profile}
                      style={{
                        margin: " 0px 0px 3px 10px",
                        borderRadius: "5%",
                        height: "200px",
                        width: "200px",
                      }}
                    />
                    <br />
                    {/* <img src={apiUrl+'/'+this.state.profile} 
style={{margin:' 0px 0px 3px 10px',borderRadius:'5%',height:'200px',width:'200px'}} /><br/> */}
                    <div
                      class="upload-btn-wrapper"
                      style={{ margin: "7px 0px 5px 10px" }}
                    >
                      <button class="image-btn">Upload a file</button>
                      <input
                        type="file"
                        name="myfile"
                        ref={this.avatar}
                        onChange={() => {
                          this.onChangeLogo();
                        }}
                      />
                    </div>
                  </div>
                  <br />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    class="submit-button"
                    onClick={(e) => {
                      this.onSubmit(e);
                    }}
                  >
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else return <Loader />;
  }
}

function mapStateToProps(state) {
  const { users, alert } = state;

  return { user: users.selected_user, users, alert };
}

const connectedEditVerifier = connect(mapStateToProps)(EditVerifier);
export default connectedEditVerifier;
