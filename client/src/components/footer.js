import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./footer.css";
class Footer extends React.Component {
  render() {
    return (
      <>
        <app-root _nghost-sc0="" ng-version="7.2.12">
          <router-outlet _ngcontent-sc0=""></router-outlet>
          <app-second _nghost-sc1="">
            {/* <app-root _nghost-sc0="" ng-version="7.2.12">
        <router-outlet _ngcontent-sc0=""></router-outlet>
        <app-verification-detail _nghost-sc6="" class="ng-star-inserted"> */}
            <div _ngcontent-sc6="" class="spacer"></div>
            <app-footer _ngcontent-sc6="" _nghost-sc5="">
              {/* <h2 id="tit">BUSINESS PARTNER</h2> */}
              <div _ngcontent-sc5="" class="row footer-logos partners p-4">
                <h3 id="tit">BUSINESS PARTNER</h3>
                <div _ngcontent-sc5="" class="wrapper">
                  <img _ngcontent-sc5="" src="../assets/footer/Yes_Bank.png" />
                  <img _ngcontent-sc5="" src="../assets/footer/Axis_Bank.png" />
                  <img _ngcontent-sc5="" src="../assets/footer/kvb.png" />
                  <img _ngcontent-sc5="" src="../assets/footer/hdb.jpg" />
                  <img _ngcontent-sc5="" src="../assets/footer/hdfc.png" />
                  <img _ngcontent-sc5="" src="../assets/footer/STFC.png" />
                </div>
              </div>
              {/* <h2 id="title">MEMBERSHIP</h2> */}
              <div _ngcontent-sc5="" class="row footer-logos p-4" id="ftn">
                <h3 id="title">MEMBERSHIP</h3>
                <div _ngcontent-sc5="" class="wrapper">
                  <img
                    _ngcontent-sc5=""
                    alt="NSDL"
                    src="../assets/footer/nsdl.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="nasscomm"
                    src="../assets/footer/nasscomm.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="CII"
                    src="../assets/footer/cii.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="nasscomm"
                    src="../assets/footer/Equifax_logo.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="nasscomm"
                    src="../assets/footer/digilocker.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="nasscomm"
                    src="../assets/footer/startup-india.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="aadhaar"
                    src="../assets/footer/aadhar.png"
                  />
                  <img
                    _ngcontent-sc5=""
                    alt="cibil"
                    src="../assets/footer/cibil.png"
                  />
                  {/* <img
                    _ngcontent-sc5=""
                    alt="iso"
                    src="../assets/footer/iso.png"
                  /> */}
                  {/* <img
                    _ngcontent-sc5=""
                    alt="SLL Trust"
                    src="../assets/footer/ssl.png"
                  /> */}
                </div>
              </div>
              <footer _ngcontent-sc5="">
                <div _ngcontent-sc5="" class="container">
                  <div _ngcontent-sc5="" class="row footer-content">
                    <div _ngcontent-sc5="" class="col-md-3">
                      <h5 _ngcontent-sc5="">Quick Links</h5>
                      <ul _ngcontent-sc5="">
                        <li _ngcontent-sc5="">
                          <a _ngcontent-sc5="">Ratings &amp; Review</a>
                        </li>
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to={"/career"}>
                            Career with Us
                          </Link>
                        </li>
                        <li _ngcontent-sc5="">
                          <a _ngcontent-sc5="">Live Chat</a>
                        </li>
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to="/feedback">
                            Feedback
                          </Link>
                        </li>
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to="/faq">
                            FAQ's
                          </Link>
                        </li>
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to="/help">
                            Help
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div _ngcontent-sc5="" class="col-md-3">
                      <h5 _ngcontent-sc5="">Terms &amp; Policy</h5>
                      <ul _ngcontent-sc5="">
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to="/terms&conditions">
                            Terms and Conditions
                          </Link>
                        </li>
                        <li _ngcontent-sc5="">
                          <Link _ngcontent-sc5="" to={"/privacy-policy"}>
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div _ngcontent-sc5="" class="col-md-3">
                      <h5 _ngcontent-sc5="">Social Links</h5>
                      <a
                        _ngcontent-sc5=""
                        href="https://www.facebook.com/pg/www."
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-facebook"></i>
                        Facebook
                      </a>
                      <a
                        _ngcontent-sc5=""
                        href="https://www.instagram.com/vfast.in/?igshid=udh0i53a85ww"
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-instagram"></i>
                        Instagram
                      </a>
                      <a
                        _ngcontent-sc5=""
                        href="https://in.pinterest.com/pin/819444094682129972/"
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-pinterest"></i>
                        Pinterest
                      </a>
                      <a
                        _ngcontent-sc5=""
                        href="https://vfastverify.tumblr.com/"
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-tumblr"></i>Tumblr
                      </a>
                      <a
                        _ngcontent-sc5=""
                        href="https://twitter.com/VFAST_IN"
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-twitter"></i>Twitter
                      </a>
                      <a
                        _ngcontent-sc5=""
                        href="https://www.linkedin.com/company/vfast"
                        target="_blank"
                      >
                        <i _ngcontent-sc5="" class="fab fa-linkedin"></i>
                        LinkedIn
                      </a>
                    </div>
                    <div _ngcontent-sc5="" class="col-md-3">
                      <h5 _ngcontent-sc5="">Downloads</h5>
                      {/* <!----> */}
                      <ul _ngcontent-sc5="" class="ng-star-inserted">
                        {/* <!----> */}
                        <li _ngcontent-sc5="" class="ng-star-inserted">
                          <a
                            _ngcontent-sc5=""
                            target="_blank"
                            href="https://vfast.in/static/uploads/file-to-upload-1580551374005-CFV001.pdf"
                          >
                            CF-V001{" "}
                          </a>
                        </li>
                        <li _ngcontent-sc5="" class="ng-star-inserted">
                          <a
                            _ngcontent-sc5=""
                            target="_blank"
                            href="https://vfast.in/static/uploads/file-to-upload-1581662565332-VERIFICATION SERVICES_compressed.pdf"
                          >
                            VERIFICATION SERVICES{" "}
                          </a>
                        </li>
                      </ul>
                      {/* <!----> */}
                    </div>
                  </div>
                  {/* <span>
                    <img
                      className="img"
                      _ngcontent-sc5=""
                      alt="SLL Trust"
                      src="../assets/footer/ssl.png"
                    />

                    <img
                      className="img"
                      _ngcontent-sc5=""
                      alt="iso"
                      src="../assets/footer/iso.png"
                    />
                  </span> */}
                </div>
              </footer>

              {/* _ngcontent-sc5="" */}

              {/* <div className="copyright">
                © Copyright FBIV Infocomm Pvt. Ltd. All Rights Reserved.
                {" "}
              </div> */}
              <div className="footer-copyright text-center row py-3">
                <MDBContainer fluid col-md-3 offset-3>
                  <br></br>© Copyright FBIV Infocomm Pvt. Ltd. All Rights
                  Reserved.
                  <span>
                    <img
                      className="img"
                      _ngcontent-sc5=""
                      alt="SLL Trust"
                      src="../assets/footer/ssl.png"
                    />

                    <img
                      className="img"
                      _ngcontent-sc5=""
                      alt="iso"
                      src="../assets/footer/iso.png"
                    />
                  </span>
                </MDBContainer>
              </div>
            </app-footer>
          </app-second>
        </app-root>
        {/* </app-verification-detail></app-root> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedFooter = connect(mapStateToProps)(Footer);
export { connectedFooter as Footer };
