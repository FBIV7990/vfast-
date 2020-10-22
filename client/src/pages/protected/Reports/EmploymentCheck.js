import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
// import moment from 'moment'
import { reportActions } from "../../../actions";
import logoImage from "../../../img/default.jpg";
import ImageUploader from "react-images-upload";

class EmploymentCheck extends React.Component {
  constructor(props) {
    super(props);
    this.document = React.createRef();
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      email: "",
      id: "",
      employee_name: "",
      gender: "",
      dob: new Date(),
      father_name: "",
      mother_name: "",
      language: "",
      aadhar_number: "",
      introduced_by: "",
      height: "",
      identity_mark: "",
      birth_place: "",
      countryCode: "",
      representative_name: "",
      representative_sign: "",
      date_of_initiation: new Date(),
      date_of_physical_verification: new Date(),
      date_of_closure: new Date(),
      latitude: "28.6604983",
      longitude: "77.279704",
      mobile: "",
      employer_name: "",
      designation: "",
      address: "",
      date_since_employed: "",
      tenure: "",
      person_met_in_org: "",
      person_designation: "",
      document: logoImage || [],
      verification_id: "5e5368ddf7ea3930cc48879a",
      pictures: [],
    };
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        // alert(JSON.stringify(position.coords))
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });
      });
    }

    if (this.props.location.state) {
      const data = this.props.location.state.data;
      console.log(JSON.stringify(data));
      const employee = data.employee_id;
      this.setState({
        verification_id: data._id,
        employee_name: employee.name,
        email: employee.email,
        mobile: employee.mobile,
        address: employee.address,
        aadhar_number: employee.aadhar_number,
        employer_name: employee.company,
        designation: employee.designation,
        date_of_initiation: employee.created_on,
      });
    }
  }
  onChangeLogo() {
    // Assuming only image
    var file = this.document.current.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        document: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?
    // TODO: concat files
  }
  onSave() {
    const {
      verification_id,
      id,
      employee_name,
      gender,
      dob,
      father_name,
      mother_name,
      language,
      aadhar_number,
      introduced_by,
      height,
      identity_mark,
      birth_place,
      countryCode,
      representative_name,
      representative_sign,
      date_of_initiation,
      date_of_physical_verification,
      date_of_closure,
      latitude,
      longitude,
      email,
      mobile,
      employer_name,
      designation,
      address,
      date_since_employed,
      tenure,
      person_met_in_org,
      person_designation,
      pictures,
    } = this.state;

    const formdata = new FormData();
    formdata.append("verification_id", verification_id);
    formdata.append("order_id", id);
    formdata.append("employment_check", true);
    formdata.append(
      "employment_check_info",
      JSON.stringify({
        employee_name: employee_name,
        gender: gender,
        dob: dob,
        birthplace: birth_place,
        mobile: mobile,
        email: email,
        fathername: father_name,
        mothername: mother_name,
        language: language,
        aadhar_number: aadhar_number,
        introduced_by: introduced_by,
        height: height,
        identity_mark: identity_mark,
        employer_name: employer_name,
        designation: designation,
        address: address,
        date_since_employed: date_since_employed,
        tenure: tenure,
        person_met_in_org: person_met_in_org,
        person_designation: person_designation,
      })
    );
    formdata.append("representative_name", representative_name);
    formdata.append("representative_sign", representative_sign);
    formdata.append("date_of_initiation", date_of_initiation);
    formdata.append(
      "date_of_physical_verification",
      date_of_physical_verification
    );
    formdata.append("date_of_closure", date_of_closure);
    formdata.append("latitude", latitude + "");
    formdata.append("longitude", longitude + "");
    pictures &&
      pictures.map((picture) => {
        formdata.append("documents", picture);
      });
    const { dispatch } = this.props;
    dispatch(reportActions.add(formdata));
  }
  onChangeValue(e, key) {
    this.setState({ [key]: e.target.value });
  }
  onChange = (dob) => this.setState({ dob });
  onDateInit = (date_of_initiation) => this.setState({ date_of_initiation });
  onVerification = (date_of_physical_verification) =>
    this.setState({ date_of_physical_verification });
  onClosure = (date_of_closure) => this.setState({ date_of_closure });
  onDateSinceEmployed = (date_since_employed) =>
    this.setState({ date_since_employed });

  render() {
    return (
      <div class="container">
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              padding: "10px",
              backgroundColor: "white",
              //  margin:'10px 0px',
              borderRadius: "7px",
              boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              {" "}
              <h3
                style={{
                  background: "#2C3B4C",
                  color: "white",
                  padding: "5px",
                }}
              >
                Employment Check
              </h3>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Order Id </label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.id}
                    placeholder="Order id"
                    onChange={(event) => {
                      this.onChangeValue(event, "id");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Employee name</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.employee_name}
                    placeholder="Employee name"
                    onChange={(event) => {
                      this.onChangeValue(event, "employee_name");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  <label>Gender:</label>
                </div>
                <select
                  className="form-input"
                  value={this.state.gender}
                  onChange={(e) => {
                    this.onChangeValue(e, "gender");
                  }}
                >
                  <option name="Male" value="Male" selected>
                    Male
                  </option>
                  <option name="Female" value="Female">
                    Female
                  </option>
                  <option name="Others" value="Others">
                    Others
                  </option>
                </select>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  <label>Date of Birth:</label>
                </div>
                <DatePicker
                  className="form-input"
                  format="dd/MM/yyyy"
                  onChange={this.onChange}
                  value={this.state.dob}
                />
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Birth place</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.birth_place}
                    placeholder="Birth place"
                    onChange={(event) => {
                      this.onChangeValue(event, "birth_place");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div style={{ paddingLeft: "6px" }}>
                  <label>Mobile :</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.mobile}
                    placeholder="mobile"
                    onChange={(event) => {
                      this.onChangeValue(event, "mobile");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Email</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.email}
                    placeholder="email"
                    onChange={(event) => {
                      this.onChangeValue(event, "email");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Father name</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.father_name}
                    placeholder="father name"
                    onChange={(event) => {
                      this.onChangeValue(event, "father_name");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Mother name</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.mother_name}
                    placeholder="mother name"
                    onChange={(event) => {
                      this.onChangeValue(event, "mother_name");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Language Spoken</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.language}
                    placeholder="Language spoken"
                    onChange={(event) => {
                      this.onChangeValue(event, "language");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Aadhar number</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.aadhar_number}
                    maxLength="12"
                    placeholder="aadhar number"
                    onChange={(event) => {
                      this.onChangeValue(event, "aadhar_number");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Introduced By</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.introduced_by}
                    placeholder="Introduced by"
                    onChange={(event) => {
                      this.onChangeValue(event, "introduced_by");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Height(in cms)</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.height}
                    placeholder="Height(in cms)"
                    onChange={(event) => {
                      this.onChangeValue(event, "height");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Identity Mark</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.identity_mark}
                    placeholder="Identity Mark"
                    onChange={(event) => {
                      this.onChangeValue(event, "identity_mark");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Employer name</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.employer_name}
                    placeholder="employer name"
                    onChange={(event) => {
                      this.onChangeValue(event, "employer_name");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Designation</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.designation}
                    placeholder="designation"
                    onChange={(event) => {
                      this.onChangeValue(event, "designation");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Date since employed</label>
                  <br />
                  {/* <input className='form-input' type="text"
value={this.state.date_since_employed} 
placeholder='date since employed'
onChange={(event)=>{this.onChangeValue(event,'date_since_employed')}}/> */}
                  <DatePicker
                    className="form-input"
                    format="dd/MM/yyyy"
                    onChange={this.onDateSinceEmployed}
                    name="date_since_employed"
                    value={this.state.date_since_employed}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Address</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.address}
                    placeholder="Address"
                    onChange={(event) => {
                      this.onChangeValue(event, "address");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>tenure</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.tenure}
                    placeholder="tenure"
                    onChange={(event) => {
                      this.onChangeValue(event, "tenure");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Person met in organisation</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.person_met_in_org}
                    placeholder="person met in organisation"
                    onChange={(event) => {
                      this.onChangeValue(event, "person_met_in_org");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Person designation</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.person_designation}
                    placeholder="person designation"
                    onChange={(event) => {
                      this.onChangeValue(event, "person_designation");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Representative name</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.representative_name}
                    placeholder="Representative name"
                    onChange={(event) => {
                      this.onChangeValue(event, "representative_name");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Representative Sign</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.representative_sign}
                    placeholder="Representative Sign"
                    onChange={(event) => {
                      this.onChangeValue(event, "representative_sign");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Date of initiation</label>
                  <br />
                  <DatePicker
                    className="form-input"
                    format="dd/MM/yyyy"
                    onChange={this.onDateInit}
                    value={this.state.date_of_initiation}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Date of physical verification</label>
                  <br />
                </div>
                <DatePicker
                  className="form-input"
                  format="dd/MM/yyyy"
                  onChange={this.onVerification}
                  value={this.state.date_of_physical_verification}
                />
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Date of Closure</label>
                  <br />
                </div>
                <DatePicker
                  className="form-input"
                  format="dd/MM/yyyy"
                  onChange={this.onClosure}
                  value={this.state.date_of_closure}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div style={{ paddingLeft: "10px" }}>
                  <label>Documents</label> <br />
                  <ImageUploader
                    withPreview={true}
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                  />
                </div>
              </div>
              <div className="col-sm-4"></div>
              <div className="col-sm-4"></div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                className="submit-button"
                onClick={() => {
                  this.onSave();
                }}
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;

  return { alert };
}

const connectedEmploymentCheck = connect(mapStateToProps)(EmploymentCheck);
export default connectedEmploymentCheck;
