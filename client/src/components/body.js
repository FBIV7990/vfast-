import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <>
        <div _ngcontent-sc1="" id="container">
          <section _ngcontent-sc1="" class="m-0">
            <div _ngcontent-sc1="" class="container">
              <div _ngcontent-sc1="" class="row">
                <div _ngcontent-sc1="" class="col-md-6">
                  <h2 _ngcontent-sc1="">About Us</h2>
                  <p _ngcontent-sc1="">
                    {" "}
                    VFAST is the fastest evolving verification product by FBIV
                    Infocomm Pvt Ltd in India. We provide a compliant &amp;
                    robust background verification process to help large
                    enterprises, small businesses, startup’s and individuals to
                    build successful relationships with their applicants based
                    on trust and safety.{" "}
                  </p>
                  <p _ngcontent-sc1="">
                    {" "}
                    But what's most exciting is that, with our latest
                    technology-based applications will totally buyout the
                    traditional verification market and we are the first company
                    to take advantage of this new technology that is set to 10X
                    the market in the coming years. Thus, VFAST is able to offer
                    the fastest, cheapest, accurate, and most comprehensive
                    reports, which will allow it to become India’s leading
                    verification product.{" "}
                  </p>
                  <div _ngcontent-sc1="" class="about-wrapper">
                    <div _ngcontent-sc1="" class="aboutus">
                      <div _ngcontent-sc1="" class="icons">
                        <i _ngcontent-sc1="" class="fas fa-shield-alt"></i>
                      </div>
                      <div _ngcontent-sc1="" class="content">
                        <h4 _ngcontent-sc1="">Trust</h4>
                        <p _ngcontent-sc1="">
                          {" "}
                          We use a combination of human and machine-based
                          resources to build trust among our customers. While
                          using the latest and automated system to maintain the
                          trust we do physical verification by reaching the
                          desired location.{" "}
                        </p>
                      </div>
                    </div>
                    <div _ngcontent-sc1="" class="aboutus">
                      <div _ngcontent-sc1="" class="icons">
                        <i _ngcontent-sc1="" class="fas fa-laptop-code"></i>
                      </div>
                      <div _ngcontent-sc1="" class="content">
                        <h4 _ngcontent-sc1="">Technology</h4>
                        <p _ngcontent-sc1="">
                          {" "}
                          Our verification process is totally technology based,
                          we use The latest technologies for the complete
                          process and generate an authentic report.{" "}
                        </p>
                      </div>
                    </div>
                    <div _ngcontent-sc1="" class="aboutus">
                      <div _ngcontent-sc1="" class="icons">
                        <i
                          _ngcontent-sc1=""
                          class="far fa-file-alt evidence"
                        ></i>
                      </div>
                      <div _ngcontent-sc1="" class="content">
                        <h4 _ngcontent-sc1="">Evidence</h4>
                        <p _ngcontent-sc1="">
                          {" "}
                          In our system, in spite of the latest technologies, we
                          assign a physical surveyor who goes to the desired
                          location and can submit report only if he is 100
                          meters range of the target location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-sc1="" class="col-md-6">
                  <div _ngcontent-sc1="" class="page-header">
                    <h2 _ngcontent-sc1="" id="timeline">
                      VERIFICATION PROCESS
                    </h2>
                  </div>
                  <ul _ngcontent-sc1="" class="timeline">
                    <li _ngcontent-sc1="">
                      <div _ngcontent-sc1="" class="timeline-badge">
                        <i _ngcontent-sc1="" class="fas fa-arrow-down"></i>
                      </div>
                      <div _ngcontent-sc1="" class="timeline-panel">
                        <div _ngcontent-sc1="" class="timeline-heading">
                          <h4 _ngcontent-sc1="" class="timeline-title">
                            Register Request
                          </h4>
                        </div>
                        <div _ngcontent-sc1="" class="timeline-body">
                          <p _ngcontent-sc1="">Fill up the Verification Form</p>
                        </div>
                      </div>
                    </li>
                    <li _ngcontent-sc1="" class="timeline-inverted">
                      <div _ngcontent-sc1="" class="timeline-badge warning">
                        <i _ngcontent-sc1="" class="fas fa-arrow-down"></i>
                      </div>
                      <div _ngcontent-sc1="" class="timeline-panel">
                        <div _ngcontent-sc1="" class="timeline-heading">
                          <h4 _ngcontent-sc1="" class="timeline-title">
                            Payment
                          </h4>
                        </div>
                        <div _ngcontent-sc1="" class="timeline-body">
                          <p _ngcontent-sc1="">
                            Do the required payment for the respective service.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li _ngcontent-sc1="">
                      <div _ngcontent-sc1="" class="timeline-badge danger">
                        <i _ngcontent-sc1="" class="fas fa-arrow-down"></i>
                      </div>
                      <div _ngcontent-sc1="" class="timeline-panel">
                        <div _ngcontent-sc1="" class="timeline-heading">
                          <h4 _ngcontent-sc1="" class="timeline-title">
                            Surveyor Appointed
                          </h4>
                        </div>
                        <div _ngcontent-sc1="" class="timeline-body">
                          <p _ngcontent-sc1="">
                            Our system will automatically assign a surveyor for
                            your request.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li _ngcontent-sc1="" class="timeline-inverted">
                      <div _ngcontent-sc1="" class="timeline-badge green">
                        <i _ngcontent-sc1="" class="fas fa-arrow-down"></i>
                      </div>
                      <div _ngcontent-sc1="" class="timeline-panel">
                        <div _ngcontent-sc1="" class="timeline-heading">
                          <h4 _ngcontent-sc1="" class="timeline-title">
                            Report Generated
                          </h4>
                        </div>
                        <div _ngcontent-sc1="" class="timeline-body">
                          <p _ngcontent-sc1="">
                            After complete verification we'll generate an
                            authentic report.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section _ngcontent-sc1="" class="services">
            <h2 _ngcontent-sc1="">SERVICE</h2>
            <div _ngcontent-sc1="" class="row service-box-wrapper">
              <div _ngcontent-sc1="" class="container">
                <div _ngcontent-sc6="" class="main">
                  <router-outlet _ngcontent-sc6=""></router-outlet>
                  <app-employee _nghost-sc16="">
                    {/* <div _ngcontent-sc16="" class="container"> */}
                    {/* <h3 _ngcontent-sc16="" style={{textAlign:'center'}}>EMPLOYEE</h3> */}
                    <div _ngcontent-sc16="" class="contain">
                      <div _ngcontent-sc16="" class="row">
                        <div _ngcontent-sc16="" class="col-md-6">
                          <img
                            _ngcontent-sc16=""
                            alt="employer"
                            class="img-fluid"
                            src="../assets/employee1.jpg"
                          />
                        </div>
                        <div _ngcontent-sc16="" class="col-md-6 my-auto">
                          <p _ngcontent-sc16="">
                            Employees represent a company and thus are an
                            integral part of it. If you will hire the right
                            employees, your company will move in the right
                            direction.{" "}
                          </p>
                          <p _ngcontent-sc16="">
                            Since the job market is a bit tight, many candidates
                            lie on the resume and give fake references and may
                            even further provide fraudulent information.
                          </p>
                          <p _ngcontent-sc16="">
                            Thus, it’s an absolute necessity to get employee
                            enrollment and screening done on all candidates
                            before they join your company and become the face of
                            the business.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-sc16="" class="contain">
                      <div _ngcontent-sc16="" class="row">
                        <div _ngcontent-sc16="" class="col-md-6">
                          <h4 _ngcontent-sc16="">
                            Employee Enrollment and Background Verification
                          </h4>
                          <p _ngcontent-sc16="">
                            Employee’s background verification including
                            education wok experience, residential address
                            screening etc. is vital to building a secure company
                            culture.
                          </p>
                          <ul _ngcontent-sc16="">
                            <li _ngcontent-sc16="">
                              {" "}
                              To avoid numerous future issues for the company
                            </li>
                            <li _ngcontent-sc16="">
                              To select the right candidate fit every time
                            </li>
                            <li _ngcontent-sc16="">
                              {" "}
                              To improve and grow your business
                            </li>
                          </ul>
                        </div>
                        <div _ngcontent-sc16="" class="col-md-6">
                          <img
                            _ngcontent-sc16=""
                            alt="employer"
                            class="img-fluid"
                            src="../assets/employee2.jpg"
                          />
                        </div>
                      </div>
                      <div _ngcontent-sc16="" class="row">
                        <div _ngcontent-sc16="" class="col-md-6">
                          <h5 _ngcontent-sc16="">
                            4 risks your company eliminates when a background
                            check for employees is a part of your hiring process
                          </h5>
                          <ul _ngcontent-sc16="">
                            <li _ngcontent-sc16="">False credentials</li>
                            <li _ngcontent-sc16="">
                              Fraud, Hacking and Cybercrime
                            </li>
                            <li _ngcontent-sc16="">Negligent hiring</li>
                            <li _ngcontent-sc16="">
                              Unsafe conditions for customers and
                              employees&nbsp;
                            </li>
                          </ul>
                        </div>
                        <div _ngcontent-sc16="" class="col-md-6">
                          <h4 _ngcontent-sc16="" style={{ textAlign: "left" }}>
                            Key Background Checks
                          </h4>
                          <ul _ngcontent-sc16="">
                            <li _ngcontent-sc16=""> Identity check</li>
                            <li _ngcontent-sc16=""> Address verification</li>
                            <li _ngcontent-sc16=""> Education</li>
                            <li _ngcontent-sc16="">
                              {" "}
                              Personal &amp; Professional checks
                            </li>
                            <li _ngcontent-sc16=""> Company search</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <div _ngcontent-sc16="" class="text-center mb-5 mt-2"><button _ngcontent-sc16="" color="primary"
                                mat-raised-button="" class="mat-raised-button mat-primary _mat-animation-noopable"><span
                                    class="mat-button-wrapper"><Link style={{color:'white'}} to={'/login'}>Submit Request</Link></span>
                                <div class="mat-button-ripple mat-ripple" matripple=""></div>
                                <div class="mat-button-focus-overlay"></div>
                            </button></div> */}
                    {/* </div> */}
                  </app-employee>
                </div>
              </div>
            </div>
          </section>
          {/* <section _ngcontent-sc1="">
                    <h2 _ngcontent-sc1="">MD Profile</h2>
                    <div _ngcontent-sc1="" class="container">
                        <div _ngcontent-sc1="" class="row">
                            <div _ngcontent-sc1="" class="col-md-3"><img _ngcontent-sc1="" alt="Amarjeet Singh"
                                    class="md-img" src="assets/img/amarjeet.jpg"/></div>
                            <div _ngcontent-sc1="" class="col-md-9">
                                <p _ngcontent-sc1=""> Mr. Amarjeet Singh is a Managing Director and the Founder of FBIV
                                    Infocomm Pvt Ltd. He has recently launched the <strong
                                        _ngcontent-sc1="">“VFAST”</strong> background verification services which are
                                    leading &amp; evolving rapidly in the background verification industry. It's the
                                    first time that any background verification service is also available on the VFAST
                                    app (Android and IOS) for everyone and for an easy approach. </p>
                                <p _ngcontent-sc1=""> With the VFAST launch, he cleared his visions to become a leader
                                    in the background verification sector to provide fair, cutting edge, state of the
                                    art, comprehensive and foolproof services to everyone. VFAST provides <strong
                                        _ngcontent-sc1="">Three Enrollments</strong> (Employer, Employee, and Students)
                                    and <strong _ngcontent-sc1="">Nine Services</strong> (Tenant, Vehicle, Company,
                                    Bride &amp; Groom, Company, Travel, Product, The Property, and Employee). We
                                    profoundly and thoroughly do the background verification of all the enrollments and
                                    services to provide the most accurate and comprehensive reports to every end user at
                                    fair and incredible prices. </p>
                            </div>
                            <div _ngcontent-sc1="" class="letter"><strong _ngcontent-sc1="">From MD Corner: </strong>
                                <p _ngcontent-sc1="">I assure you that we are proficient of providing in fair and
                                    comprehensive services in the background verification sector. We have a team of
                                    vastly experienced and skilled managers who are effectual of&nbsp;professional
                                    verifiers&nbsp;trained to unravel any, task the highest level of confidentiality and
                                    trust. My entire team work under well-built administration, who is one of the
                                    innovators and of this vocation in India.</p>
                                <p _ngcontent-sc1=""> We provide optimum and foolproof verification services to make
                                    sure you get comprehensive reports and verification details. We are profoundly
                                    expertise in&nbsp;Tenant Verification, Vehicle Verification, Bride &amp; Groom
                                    Verification, and many more services. We have started a new innovative program of
                                    enrollment for <strong _ngcontent-sc1="">Employer, Employee and Student</strong>”
                                    for better vision of their future. We also going to start a “Review” segment for the
                                    same in our upcoming updates shortly. To accomplish that, employees of this company
                                    are heartily devoted to performing every project precisely, comprehensively and
                                    without extending the timeline. Before you invest in anything you must: - </p>
                                <p _ngcontent-sc1="" class="text-center"><strong _ngcontent-sc1="">“TRUST BUT VERIFY
                                        FIRST”</strong></p>
                                <div _ngcontent-sc1=""><strong _ngcontent-sc1="">Amarjeet Singh</strong>
                                    <p _ngcontent-sc1="" class="m-0">Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

const connectedBody = connect(mapStateToProps)(Body);
export { connectedBody as Body };
