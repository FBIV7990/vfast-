import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import vfast from "../../../img/VFast-white.png";
import { userActions } from "../../../actions";
import nav from "../nav";

class SideMenu extends React.Component {
  onLogout() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }
  render() {
    return (
      <>
        <div className="web-sidenav">
          <div
            id="throbber"
            style={{ display: "none", minHeight: "120px" }}
          ></div>
          <div id="noty-holder"></div>
          <div id="admin-wrapper">
            {/* <!-- Navigation --> */}
            <nav
              class="admin-navbar admin-navbar-inverse navbar-fixed-top"
              role="navigation"
            >
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div class="admin-navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="admin-navbar-brand">
                  <img
                    src={vfast}
                    style={{
                      width: "120px",
                      padding: "15px 0px",
                      paddingLeft: "14px",
                      float: "right",
                    }}
                  />
                </a>
              </div>

              <ul
                class="admin-nav navbar-right admin-top-nav"
                style={{ float: "right" }}
              >
                {/* <li><a href="#" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Stats"><i class="fa fa-bar-chart-o"></i>
                </a>
            </li>             */}
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    style={{ paddingRight: "16px", fontSize: "19px" }}
                  >
                    <i
                      class="fas fa-user-alt"
                      style={{
                        fontSize: "22px",
                        color: "white",
                        padding: "5px",
                        margin: "4px",
                        border: "1px solid white",
                        borderRadius: "50%",
                      }}
                    ></i>
                    Account
                    {/* <b class="fa fa-angle-down"></b> */}
                  </a>
                  <ul class="dropdown-menu" style={{ minWidth: "167px" }}>
                    <li>
                      <a href="#">
                        <i class="fa fa-fw fa-user"></i> Edit Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-fw fa-cog"></i> Change Password
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.onLogout();
                        }}
                      >
                        <i class="fa fa-fw fa-power-off"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --> */}
              <div class="admin-navbar-collapse navbar-ex1-collapse">
                <ul class="admin-nav admin-navbar-nav side-nav">
                  <li
                  //  style={{margin:'14px 0px'}}
                  >
                    <Link to="/admin">
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Home
                    </Link>
                    {/* <hr/>                  */}
                  </li>
                  <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-2">
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Users <i class="fa fa-fw fa-angle-down pull-right"></i>
                    </a>
                    <ul id="submenu-2" class="collapse">
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/users">
                          <i class="fa fa-fw fa-home"></i>View All
                        </Link>
                      </li>
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/vendors">
                          <i class="fa fa-fw fa-home"></i>Vendors
                        </Link>
                      </li>
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/employers">
                          <i class="fa fa-fw fa-home"></i>Employers
                        </Link>
                      </li>
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/verifiers">
                          <i class="fa fa-fw fa-home"></i>Verifiers
                        </Link>
                      </li>
                      {/* <li style={{margin:'10px 0px'}}> <Link to='/admin/vendors/verifications'><i class="fa fa-fw fa-home"></i>Verifications</Link></li>                */}
                    </ul>
                    {/* <Link to='/admin/users'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Users</Link> */}
                  </li>
                  <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-1">
                      <i
                        class="fa fa-fw fa-wrench"
                        style={{ paddingRight: "7px" }}
                      ></i>{" "}
                      Vendors <i class="fa fa-fw fa-angle-down pull-right"></i>
                    </a>
                    <ul id="submenu-1" class="collapse">
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/vendors">
                          <i class="fa fa-fw fa-home"></i>View All
                        </Link>
                      </li>
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/vendors/verifications">
                          <i class="fa fa-fw fa-home"></i>Verifications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#submenu-employers"
                    >
                      <i
                        class="fa fa-fw fa-wrench"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Employers{" "}
                      <i class="fa fa-fw fa-angle-down pull-right"></i>
                    </a>
                    <ul id="submenu-employers" class="collapse">
                      <li style={{ margin: "10px 0px" }}>
                        <Link to="/admin/employers">
                          <i
                            class="fa fa-fw fa-home"
                            style={{ paddingRight: "7px" }}
                          ></i>
                          View All
                        </Link>
                      </li>
                      {/* <li style={{margin:'10px 0px'}}> <Link to='/admin/verifiers/leads'><i class="fa fa-fw fa-home"></i>View Leads</Link></li>                */}
                    </ul>
                  </li>

                  <li>
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#submenu-verifiers"
                    >
                      <i
                        class="fa fa-fw fa-wrench"
                        style={{ paddingRight: "7px" }}
                      ></i>{" "}
                      Verifiers{" "}
                      <i class="fa fa-fw fa-angle-down pull-right"></i>
                    </a>
                    <ul id="submenu-verifiers" class="collapse">
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/verifiers">
                          <i class="fa fa-fw fa-home"></i>View All
                        </Link>
                      </li>
                      <li style={{ margin: "10px 0px" }}>
                        {" "}
                        <Link to="/admin/verifiers/leads">
                          <i class="fa fa-fw fa-home"></i>View Leads
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {/* <Link to='/admin/verifications'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Verifications</Link> */}
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#submenu-verifications"
                    >
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Verifications
                      <i class="fa fa-fw fa-angle-down pull-right"></i>
                    </a>
                    <ul id="submenu-verifications" class="collapse">
                      <li style={{ margin: "10px 0px" }}>
                        <Link to="/admin/verifications">
                          <i
                            class="fa fa-fw fa-home"
                            style={{ paddingRight: "7px" }}
                          ></i>
                          View All
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/admin/presetForm">
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Preset Form
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/reports">
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/billing">
                      <i
                        class="fa fa-fw fa-home"
                        style={{ paddingRight: "7px" }}
                      ></i>
                      Billing
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </nav>
          </div>
        </div>

        <div className="mobile-sidenav">
          <nav
            class="admin-navbar admin-navbar-inverse navbar-fixed-top"
            role="navigation"
          >
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="admin-navbar-header">
              <a class="admin-navbar-brand">
                <img
                  src={vfast}
                  style={{
                    width: "120px",
                    padding: "15px 0px",
                    paddingLeft: "14px",
                    float: "left",
                  }}
                />
              </a>

              <div></div>
            </div>

            <div style={{ float: "right" }}>
              <ul
                class="admin-nav navbar-right admin-top-nav"
                style={{ float: "right" }}
              >
                <li class="dropdown">
                  <a className="top60" data-toggle="dropdown">
                    {" "}
                    <i
                      class="fa fa-bars"
                      aria-hidden="true"
                      style={{
                        float: "right",
                        color: "white",
                        fontSize: "20px",
                        marginRight: "14px",
                      }}
                    ></i>
                  </a>
                  <ul
                    class="dropdown-menu"
                    style={{
                      minWidth: "150px",
                      marginTop: "60px",
                      float: "left",
                    }}
                  >
                    <li>
                      <Link to="/admin">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/vendors">
                        <i class="fa fa-fw fa-home"></i>Vendors
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/employers">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Employers
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/verifiers">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Verifiers
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/verifications">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Verifications
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/users">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Users
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/presetForm">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Preset Form
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/reports">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Reports
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/admin/billing">
                        <i
                          class="fa fa-fw fa-home"
                          style={{ paddingRight: "7px" }}
                        ></i>
                        Billing
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <a href="#">
                        <i class="fa fa-fw fa-user"></i> Edit Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-fw fa-cog"></i> Change Password
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          this.onLogout();
                        }}
                      >
                        <i class="fa fa-fw fa-power-off"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <i class="fa fa-bars" aria-hidden="true"style={{float:'right',color:'white',
        fontSize:'20px',marginRight:'14px'}}></i> */}
            </div>
          </nav>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedSideMenu = connect(mapStateToProps)(SideMenu);
export { connectedSideMenu as SideMenu };
