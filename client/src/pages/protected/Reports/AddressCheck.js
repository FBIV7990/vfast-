import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import { reportActions } from "../../../actions";
import logoImage from "../../../img/default.jpg";
import ImageUploader from "react-images-upload";

class AddressCheck extends React.Component {
  constructor(props) {
    super(props);
    this.document = React.createRef();
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      order_id: "ORD0001",
      reference_num: "REF001",
      employee_name: "Pradeep",
      address: "Male",
      contact_person: "Rajiv",
      relation: "Brother",
      contact_info: "7310996031",
      residental_status: "Status",
      period_of_stay: "6 months",
      family_members: "6",
      marital_status: "Single",
      age: "25",
      exterior_desc_of_house: "Good",
      exterior_desc_of_appt: "Good",
      landmark: "Land mark",
      comments: "Comment line",
      candidate_sign: "Signature",
      relationship_if_not_candidate: "Brother",
      representative_name: "Ravi rider",
      representative_sign: "Signature",
      date_of_initiation: new Date(),
      date_of_physical_verification: new Date(),
      date_of_closure: new Date(),
      latitude: "22.55",
      longitude: "77.77",
      document: logoImage,
      verification_id: "5e5368ddf7ea3930cc48879a",
      id: "",
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
      id,
      reference_num,
      employee_name,
      address,
      contact_person,
      relation,
      contact_info,
      residental_status,
      period_of_stay,
      family_members,
      marital_status,
      age,
      exterior_desc_of_house,
      exterior_desc_of_appt,
      landmark,
      comments,
      candidate_sign,
      relationship_if_not_candidate,
      representative_name,
      representative_sign,
      date_of_initiation,
      date_of_physical_verification,
      date_of_closure,
      latitude,
      longitude,
      verification_id,
      pictures,
    } = this.state;

    const formdata = new FormData();
    formdata.append("verification_id", verification_id);
    formdata.append("order_id", id);
    formdata.append(" address_check", true);
    formdata.append(
      " address_check_info",
      JSON.stringify({
        reference_num: reference_num,
        employee_name: employee_name,
        address: address,
        contact_person: contact_person,
        relation: relation,
        contact_info: contact_info,
        residental_status: residental_status,
        period_of_stay: period_of_stay,
        family_members: family_members,
        marital_status: marital_status,
        age: age,
        exterior_desc_of_house: exterior_desc_of_house,
        exterior_desc_of_appt: exterior_desc_of_appt,
        landmark: landmark,
        comments: comments,
        candidate_sign: candidate_sign,
        relationship_if_not_candidate: relationship_if_not_candidate,
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
                Address Check
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
                    value={this.state.order_id}
                    placeholder="Order id"
                    onChange={(event) => {
                      this.onChangeValue(event, "order_id");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Reference number</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.reference_num}
                    placeholder="Reference number"
                    onChange={(event) => {
                      this.onChangeValue(event, "reference_num");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  <label>Employee name</label>
                </div>
                <input
                  className="form-input"
                  type="text"
                  value={this.state.employee_name}
                  placeholder="employee name"
                  onChange={(event) => {
                    this.onChangeValue(event, "employee_name");
                  }}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  <label>Address</label>
                </div>
                <input
                  className="form-input"
                  type="text"
                  value={this.state.address}
                  placeholder="address"
                  onChange={(event) => {
                    this.onChangeValue(event, "address");
                  }}
                />
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Contact person</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.contact_person}
                    placeholder="contact person"
                    onChange={(event) => {
                      this.onChangeValue(event, "contact_person");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div style={{ paddingLeft: "6px" }}>
                  <label>Relation</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.relation}
                    placeholder="relation"
                    onChange={(event) => {
                      this.onChangeValue(event, "relation");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Contact info</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.contact_info}
                    placeholder="contact info"
                    onChange={(event) => {
                      this.onChangeValue(event, "contact_info");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Residental status</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.residental_status}
                    placeholder="residental status"
                    onChange={(event) => {
                      this.onChangeValue(event, "residental_status");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Period of stay</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.period_of_stay}
                    placeholder="period of stay"
                    onChange={(event) => {
                      this.onChangeValue(event, "period_of_stay");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Family members </label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.family_members}
                    placeholder="family members"
                    onChange={(event) => {
                      this.onChangeValue(event, "family_members");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Marital status</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.marital_status}
                    placeholder="marital status"
                    onChange={(event) => {
                      this.onChangeValue(event, "marital_status");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Age</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.age}
                    placeholder="Age"
                    onChange={(event) => {
                      this.onChangeValue(event, "age");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Exterior desc of house</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.exterior_desc_of_house}
                    placeholder="Exterior desc of house"
                    onChange={(event) => {
                      this.onChangeValue(event, "exterior_desc_of_house");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Exterior desc of apartment</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.exterior_desc_of_appt}
                    placeholder="Exterior desc of apartment"
                    onChange={(event) => {
                      this.onChangeValue(event, "exterior_desc_of_appt");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Landmark</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.landmark}
                    placeholder="Landmark"
                    onChange={(event) => {
                      this.onChangeValue(event, "landmark");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Comment</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.comments}
                    placeholder="comment"
                    onChange={(event) => {
                      this.onChangeValue(event, "comments");
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Candidate sign</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.candidate_sign}
                    placeholder="Candidate sign"
                    onChange={(event) => {
                      this.onChangeValue(event, "candidate_sign");
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div>
                  {" "}
                  <label>Relationship if not candidate</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    value={this.state.relationship_if_not_candidate}
                    placeholder="relationship if not candidate"
                    onChange={(event) => {
                      this.onChangeValue(
                        event,
                        "relationship_if_not_candidate"
                      );
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
                  onChange={this.onClosure}
                  value={this.state.date_of_closure}
                />
              </div>

              <div className="col-sm-4"></div>
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

const connectedAddressCheck = connect(mapStateToProps)(AddressCheck);
export default connectedAddressCheck;
