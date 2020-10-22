import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { Card, CardTitle, CardBody, Row, Col } from "reactstrap";
import { userActions, verifierActions } from "../../../actions";
import Thumbnail from "../../../img/operation.png";
import { TextBox } from "../../../components";

class NewVerifier extends React.Component {
  constructor(props) {
    super(props);
    this.avatar = React.createRef();
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      avatar: "",
      mobile: "",
      email: "",
      blank: "",
    };
  }

  componentDidMount() {}

  // onSubmit(e) {
  //   // e.preventDefault();
  //   const { username, password } = this.state;
  //   if (username != "" && password != "") {
  //     {
  //       const  onlyNumbers = /^[0-9]+$/;
  //       const res=  onlyNumbers.test(username);
  //       let uname=username;
  //       if(res)
  //       {
  //         uname='91'+username;
  //       }
  //       const data = { username: uname, password: password };

  //       const { dispatch,user } = this.props;
  //       dispatch(userActions.register(data));
  //       // history.push('/admin/verifiers/')
  //     }

  //   }
  // }
  onChangeLogo() {
    try {
      // Assuming only image
      var file = this.avatar.current.files[0];
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        this.setState({
          avatar: [reader.result],
        });
      }.bind(this);
      console.log(url); // Would see a path?
      // TODO: concat files
    } catch (err) {
      console.log(err);
    }
  }

  // onChangeValue(e,key){
  //   this.setState({[key]:e.target.value})
  // }
  cancelAll() {
    // alert('asdjh')
    const { blank } = this.state;
    this.setState({
      username: blank,
      firstname: blank,
      lastname: blank,
      mobile: blank,
      email: blank,
      profile: blank,
    });
  }

  onSubmit() {
    // alert('save')
    const { dispatch } = this.props;
    const {
      username,
      password,
      firstname,
      lastname,
      mobile,
      email,
      profile,
    } = this.state;
    console.log("logging new verifier:", this.state);
    if (username) {
      const onlyNumbers = /^[0-9]+$/;
      const res = onlyNumbers.test(username);
      let uname = username;
      if (res) {
        uname = "91" + username;
      }
      const formdata = new FormData();
      formdata.append("username", uname);
      // formdata.append('password',password);
      formdata.append("firstname", firstname);
      formdata.append("lastname", lastname);
      formdata.append("email", email);
      formdata.append("mobile", mobile);
      if (this.avatar.current.files[0])
        formdata.append("photo", this.avatar.current.files[0]);

      dispatch(verifierActions.create(formdata));
    }
  }

  onValueChanged = (index, val) => {
    this.setState({ [index]: val });
  };

  render() {
    const { user, alert } = this.props;
    const { username, password } = this.state;

    return (
      <>
        <div class="card">
          <div class="card-body">
            <h3 style={{ padding: 10, borderBottom: "2px solid #F5F5F5" }}>
              New Verifier
            </h3>
            <div
              style={{
                background: `url(${Thumbnail}) no-repeat`,
                backgroundSize: "50% 80%",
                backgroundPosition: "bottom right",
              }}
            >
              <div className="row">
                <div class="col-sm-4">
                  <TextBox
                    label="Username"
                    type="email"
                    name="username"
                    placeholder="Email or mobile number"
                    onTextChanged={this.onValueChanged}
                  />

                  <TextBox
                    label="Firstname"
                    type="text"
                    name="firstname"
                    onTextChanged={this.onValueChanged}
                  />

                  <TextBox
                    label="Lastname"
                    type="text"
                    name="lastname"
                    onTextChanged={this.onValueChanged}
                  />

                  <TextBox
                    label="Email"
                    type="email"
                    name="email"
                    onTextChanged={this.onValueChanged}
                  />

                  <TextBox
                    label="Mobile"
                    type="text"
                    name="mobile"
                    onTextChanged={this.onValueChanged}
                  />

                  <div
                    className="submit-button"
                    onClick={() => {
                      this.onSubmit();
                    }}
                  >
                    Submit
                  </div>
                  <div
                    className="submit-button"
                    onClick={() => {
                      this.cancelAll();
                    }}
                  >
                    Clear
                  </div>
                </div>

                <div className="col-sm-6 ">
                  <div>
                    <label>Profile picture</label>
                    <br />{" "}
                  </div>
                  <img
                    src={this.state.avatar ? this.state.avatar : ""}
                    style={{
                      margin: " 0px 0px 3px 10px",
                      borderRadius: "5%",
                      height: "200px",
                      width: "200px",
                    }}
                  />
                  <br />
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { verifiers, alert } = state;

  return { verifier: verifiers.verifier, alert };
}

const connectedNewVerifier = connect(mapStateToProps)(NewVerifier);
export default connectedNewVerifier;
