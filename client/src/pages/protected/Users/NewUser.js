import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../../actions";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {}

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username != "" && password != "") {
      const onlyNumbers = /^[0-9]+$/;
      const res = onlyNumbers.test(username);
      let uname = username;
      if (res) {
        uname = "91" + username;
      }
      const data = { username: uname, password: password };

      const { dispatch } = this.props;
      dispatch(userActions.register(data));
    }
    //  history.push('/')
  }

  render() {
    const { user, alert } = this.props;
    const { username, password } = this.state;

    return (
      <>
        <div className="container top60">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-4"></div>
              <div
                className="col-sm-4"
                style={{
                  background: "white",
                  boxShadow: "rgb(71, 65, 62) 0px 4px 11px -3px",
                  padding: "20px",
                  borderRadius: "7px",
                }}
              >
                {" "}
                <form
                  onSubmit={(e) => {
                    this.onSubmit(e);
                  }}
                >
                  <div>
                    <h3 style={{ paddingLeft: "20px" }}>New User</h3>
                  </div>
                  <hr />
                  <div class="col-sm-12 col-md-12">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Email or Number"
                      value={username}
                      onChange={(uname) => {
                        this.setState({ username: uname.target.value });
                      }}
                    />
                    <br />
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(pass) => {
                        this.setState({ password: pass.target.value });
                      }}
                    />
                    <br />
                    <div
                      class="submit-button"
                      onClick={(e) => {
                        this.onSubmit(e);
                      }}
                    >
                      Create
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;

  return { alert };
}

const connectedNewUser = connect(mapStateToProps)(NewUser);
//export { connectedNewUser as NewUser };
export default connectedNewUser;
