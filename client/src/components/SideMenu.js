import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import vfast from "../img/VFast-white.png";
import { userActions } from "../actions";
import userImage from "../img/userImage.jpg";
class SideMenu extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      const { dispatch, user } = this.props;
      dispatch(userActions.get());
    }
  }

  onLogout() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }
  mobilemenu = [];
  navs = this.props.data.items.map((element, key) => {
    this.mobilemenu.push(
      <li>
        <Link to={element.url}>
          <i class="fa fa-fw fa-home" style={{ paddingRight: "7px" }}></i>
          {element.name}
        </Link>
      </li>
    );
    if (element.children)
      return (
        <>
          <li>
            <a href="#" data-toggle="collapse" data-target={"#submenu-" + key}>
              <i class="fa fa-fw fa-wrench" style={{ paddingRight: "7px" }}></i>{" "}
              {element.name} <i class="fa fa-fw fa-angle-down pull-right"></i>
            </a>
            <ul id={"submenu-" + key} class="collapse">
              {element.children.map((child) => (
                <>
                  <li>
                    <Link to={child.url}>
                      <i class="fa fa-fw fa-home"></i>
                      {child.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </li>
        </>
      );
    else {
      return (
        <li>
          <Link to={element.url}>
            <i class="fa fa-fw fa-home" style={{ paddingRight: "7px" }}></i>
            {element.name}
          </Link>
        </li>
      );
    }
  });

  render() {
    const { user } = this.props;

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
                      float: "left",
                    }}
                  />
                </a>
              </div>

              {/* <ul class="admin-nav navbar-right admin-top-nav" style={{float:'right'}}>
                  
            <li class="dropdown">
                <a class="dropdown dropdown-toggle" data-toggle="dropdown" style={{paddingRight:'16px',fontSize:'19px'}}>
                    <i class='fas fa-user-alt' 
                    style={{fontSize:'22px',
                    color:'white',
                    padding:'5px',
                    margin:'4px',
                    border:'1px solid white',
                    borderRadius:'50%'}}></i>Account
              
                </a>
                <ul class="dropdown-menu" style={{minWidth:'167px'}}>
                    <li><a href="#"><i class="fa fa-fw fa-user"></i> Edit Profile</a></li>
                    <li><a href="#"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                    <li class="divider"></li>
                    <li><a href="#"  onClick={()=>{this.onLogout()}}><i class="fa fa-fw fa-power-off" ></i> Logout</a></li>
                </ul>
            </li>
        </ul> */}

              <div style={{ float: "right" }}>
                <div class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    style={{
                      padding: "2px 10px",
                      marginTop: -5,
                      marginRight: 30,
                      fontSize: "19px",
                      display: "block",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    {
                      user && user.user.profile.profile_picture != "" ? (
                        <img src={user && user.user.profile.profile_picture} />
                      ) : (
                        <img
                          src={userImage}
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                            padding: "5px",
                          }}
                        />
                      )
                      //   <i class='fas fa-user-alt'
                      // style={{fontSize:'22px',
                      // color:'white',
                      // padding:'5px',
                      // margin:'4px',
                      // border:'1px solid white',
                      // borderRadius:'50%'}}></i>
                    }
                    {user && user.user.account.username}
                  </a>
                  <ul class="dropdown-menu" style={{ minWidth: "167px" }}>
                    <li>
                      <Link to={"/editprofile"}>
                        <a href="#">
                          <i class="fa fa-fw fa-user"></i> Edit Profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/changepassword"}>
                        <a href="#">
                          <i class="fa fa-fw fa-cog"></i> Change Password
                        </a>
                      </Link>
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
                </div>
              </div>
              {/* <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --> */}
              <div class="admin-navbar-collapse navbar-ex1-collapse sidebar">
                <ul class="admin-nav admin-navbar-nav side-nav">{this.navs}</ul>
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
                    {this.mobilemenu}
                    {/* <li><Link to='/admin' ><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}} ></i>Home</Link></li>
                <li><Link to='/admin/vendors'><i class="fa fa-fw fa-home"></i>Vendors</Link></li>
                <li><Link to='/admin/employers'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Employers</Link></li>
                <li> <Link to='/admin/verifiers'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Verifiers</Link></li>
                <li> <Link to='/admin/verifications'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Verifications</Link></li>
                <li> <Link to='/admin/users'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Users</Link></li>
                <li> <Link to='/admin/presetForm'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Preset Form</Link>
           </li> 
           <li> <Link to='/admin/reports'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Reports</Link>
            </li>
           <li> <Link to='/admin/billing'><i class="fa fa-fw fa-home" style={{paddingRight:'7px'}}></i>Billing</Link></li>
          */}{" "}
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
            </div>
          </nav>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  const { alert, users } = state;

  return { alert, user: users.currentUser, loggedIn };
}

const connectedSideMenu = connect(mapStateToProps)(SideMenu);
export { connectedSideMenu as SideMenu };
