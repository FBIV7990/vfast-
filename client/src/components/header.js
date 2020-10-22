import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <app-root _nghost-sc0="" ng-version="7.2.12">
        <router-outlet _ngcontent-sc0=""></router-outlet>
        <app-second _nghost-sc1="">
          <app-nav _ngcontent-sc6="" _nghost-sc3="">
            <nav _ngcontent-sc3="" class="navbar navbar-expand-lg">
              <button
                _ngcontent-sc3=""
                aria-label="Toggle navigation"
                class="nav-toggle mobile-toggle"
                type="button"
              >
                <span _ngcontent-sc3="">
                  <i _ngcontent-sc3="" class="material-icons">
                    menu
                  </i>
                </span>
              </button>
              <Link _ngcontent-sc3="" class="navbar-brand" to={"/"}>
                <img
                  _ngcontent-sc3=""
                  alt="logo"
                  src="../assets/VFast-white.png"
                  style={{ marginTop: "-10px" }}
                />
              </Link>
              <span _ngcontent-sc3="" class="spacer"></span>
              <div _ngcontent-sc3="" class="navbar_motion main-nav">
                <div _ngcontent-sc3="" class="collapse navbar-collapse">
                  <ul _ngcontent-sc3="" class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li _ngcontent-sc3="" class="nav-item">
                      <Link _ngcontent-sc3="" class="nav-link white" to={"/"}>
                        Home{" "}
                        <span _ngcontent-sc3="" class="sr-only">
                          (current)
                        </span>
                      </Link>
                    </li>

                    <li _ngcontent-sc3="" class="nav-item white drop-down">
                      <a _ngcontent-sc3="" routerlink="">
                        About us
                      </a>
                      <ul _ngcontent-sc3="">
                        <li _ngcontent-sc3="">
                          <Link _ngcontent-sc3="" to={"/vision-mission"}>
                            Vision &amp; Mission
                          </Link>
                        </li>
                        <li _ngcontent-sc3="">
                          <Link _ngcontent-sc3="" to={"/why-us"}>
                            Why us ?
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li _ngcontent-sc3="" class="nav-item contactus">
                      <Link
                        _ngcontent-sc3=""
                        class="nav-link white"
                        to="/contact-us"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li _ngcontent-sc3="" class="nav-item white drop-down">
                      <a _ngcontent-sc3="">My Account</a>
                      <ul _ngcontent-sc3="">
                        <li _ngcontent-sc3="">
                          <Link _ngcontent-sc3="" to={"/login"}>
                            Login
                          </Link>
                        </li>
                        <li _ngcontent-sc3="">
                          <Link _ngcontent-sc3="" to="/signup">
                            Signup
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div _ngcontent-sc3="" class="backdrop"></div>
            <div _ngcontent-sc3="" class="sidenav">
              <ul _ngcontent-sc3="" class="mobile-nav mr-auto">
                <li _ngcontent-sc3="" class="nav-item">
                  <Link _ngcontent-sc3="" to={"/"}>
                    Home{" "}
                    <span _ngcontent-sc3="" class="sr-only">
                      (current)
                    </span>
                  </Link>
                </li>

                <li _ngcontent-sc3="" class="nav-item white drop-down">
                  <Link _ngcontent-sc3="" to={"/"}>
                    About us
                  </Link>
                  <ul _ngcontent-sc3="">
                    <li _ngcontent-sc3="">
                      <Link
                        _ngcontent-sc3=""
                        routerlink="/home/about/vision-and-mission"
                        to={"/vision-mission"}
                      >
                        Vision &amp; Mission
                      </Link>
                    </li>
                    <li _ngcontent-sc3="">
                      <Link _ngcontent-sc3="" to={"/why-us"}>
                        Why us ?
                      </Link>
                    </li>
                  </ul>
                </li>

                <li _ngcontent-sc3="" class="nav-item contactus">
                  <Link _ngcontent-sc3="" to="/contact-us">
                    Contact us
                  </Link>
                </li>
                <li _ngcontent-sc3="" class="nav-item white drop-down">
                  <a _ngcontent-sc3="">My Account</a>
                  <ul _ngcontent-sc3="">
                    <li _ngcontent-sc3="">
                      <Link _ngcontent-sc3="" to={"/login"}>
                        Login
                      </Link>
                    </li>
                    <li _ngcontent-sc3="">
                      <Link _ngcontent-sc3="" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </app-nav>
        </app-second>
      </app-root>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
