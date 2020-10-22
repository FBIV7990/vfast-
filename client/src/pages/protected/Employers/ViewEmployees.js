import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import DataTable, { createTheme } from "react-data-table-component";
import {
  employerActions,
  employeeActions,
  leadActions,
} from "../../../actions";
import { Modal } from "react-responsive-modal";
import ImageUploader from "react-images-upload";
import { history } from "../../../helpers";
import DataTable from "../../../components/DataTable";

class ViewEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      pictures: [],
      open: false,
      employer_id: "",
      employee_id: "",
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onOpenModal = (id, employerId) => {
    console.log("open modal:", id, employerId);
    this.setState((state) => ({
      open: !state.open,
      employee_id: id,
      employer_id: employerId,
    }));
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  leads = [];

  onCheckChanged(e, row) {
    const control = e.target;
    console.log([control.name], control.checked);
    //console.log(row)
    const index = this.leads.findIndex((lead) => {
      return (
        lead.employer_id == row.employer_id &&
        lead.employee_id == row.employee_id
      );
    });
    if (index == -1) {
      const data = {
        employer_id: row.employer_id,
        employee_id: row.employee_id,
        physical_check: false,
        education_check: false,
        pre_employment_check: false,
        cibil_check: false,
        judicial_check: false,
        drug_test: false,
      };
      data[control.name] = control.checked;
      this.leads.push(data);
    } else this.leads[index][control.name] = control.checked;
    console.log(this.leads);
  }

  onEditRow(id) {
    history.push("/employers/employees/" + id);
  }

  onViewRow(id) {
    const { employees } = this.props;
    const employeesId = this.props.match.params.id;

    history.push("/employers/employees/view/" + id);
  }

  onDeleteRow(record) {
    //alert('Delete record')
    console.log("Delete Record", record);
  }
  columns = [
    {
      name: "Actions",
      cell: (row) => (
        <div class="btn-group" style={{ margin: "0px", padding: "0px" }}>
          <div
            className="edit-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onEditRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-edit"></i>
            <a>
              <strong>Edit</strong>
            </a>
          </div>
          <div
            className="view-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onViewRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-eye"></i>
            <a>
              <strong>View</strong>
            </a>
          </div>
          <div
            className="delete-button"
            style={{ float: "left" }}
            onClick={() => {
              this.onDeleteRow(row._id);
            }}
          >
            <i class="fa fa-fw fa-trash"></i>
            <a>
              <strong>Delete</strong>
            </a>
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "180px",
    },

    {
      name: "Checks",
      cell: (row) => (
        <div class="btn-group" style={{ backgroundColor: "skyblue" }}>
          <div>
            <div className="col-sm-6">
              <input
                type="checkbox"
                name="physical_check"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Physical Check</label>
            </div>{" "}
            <div className="col-sm-6">
              {" "}
              <input
                type="checkbox"
                name="education_check"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Education Check</label>
            </div>{" "}
          </div>
          <div>
            <div className="col-sm-6">
              <input
                type="checkbox"
                name="pre_employment_check"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Pre Employment Check</label>
            </div>
            <div className="col-sm-6">
              <input
                type="checkbox"
                name="cibil_check"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Cibil Check</label>
            </div>
          </div>
          <div>
            <div className="col-sm-6">
              <input
                type="checkbox"
                name="judicial_check"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Judicial Check</label>
            </div>
            <div className="col-sm-6">
              <input
                type="checkbox"
                name="drug_test"
                onChange={(e) => {
                  this.onCheckChanged(e, row);
                }}
              />
              <label style={{ fontSize: 12 }}>Drug Test</label>
            </div>
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "400px",
    },
    {
      name: "Unique Id",
      selector: "unique_id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Mobile",
      selector: "mobile",
      width: "100px",
    },
    {
      name: "State",
      selector: "state",
      sortable: true,
      width: "70px",
    },
    {
      name: "Contact1",
      selector: "contact1",
      cell: (row) => (
        <div>
          {row.contact1},<br />
          {row.contact2}
        </div>
      ),
    },
    {
      name: "Documents",
      selector: "documents",
      cell: (row) => (
        <div
          className="edit-button"
          onClick={() => {
            this.onOpenModal(row._id, row.employer_id);
          }}
        >
          Upload
        </div>
      ),
    },

    {
      name: "Address",
      selector: "address",
      sortable: true,
      right: true,
    },
    {
      name: "Employee Code",
      selector: "employee_code",
      sortable: true,
      right: true,
    },
    {
      name: "Company",
      selector: "company",
      sortable: true,
      right: true,
    },
    {
      name: "Company Address",
      selector: "company_address",
      sortable: true,
      right: true,
    },
    {
      name: "Designation",
      selector: "designation",
      sortable: true,
      right: true,
    },
    {
      name: "Working from",
      selector: "working_from",
      sortable: true,
      right: true,
    },
    {
      name: "Working to",
      selector: "working_to",
      sortable: true,
      right: true,
    },
    {
      name: "Contact Person",
      selector: "contact_person",
      sortable: true,
      right: true,
    },
    {
      name: "University",
      selector: "university",
      sortable: true,
      right: true,
    },
    {
      name: "Institute",
      selector: "institute",
      sortable: true,
      right: true,
    },
    {
      name: "Course",
      selector: "course",
      sortable: true,
      right: true,
    },
    {
      name: "Year of passing",
      selector: "year_of_passing",
      sortable: true,
      right: true,
    },
    {
      name: "College Address",
      selector: "college_address",
      sortable: true,
      right: true,
    },
    {
      name: "Pan Number",
      selector: "pan_number",
      sortable: true,
      right: true,
    },
    {
      name: "Aadhar Number",
      selector: "aadhar_number",
      sortable: true,
      right: true,
    },
    {
      name: "Voter Id",
      selector: "voter_id",
      sortable: true,
      right: true,
    },
    {
      name: "Height",
      selector: "height",
      sortable: true,
      right: true,
    },
    {
      name: "Identification Mark",
      selector: "identification_mark",
      sortable: true,
      right: true,
    },
    {
      name: "Blood Group",
      selector: "blood_group",
      sortable: true,
      right: true,
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;

    dispatch(employeeActions.getByEmployerId(id));

    const { employees } = this.props;
    console.log(employees);
  }

  addMany() {
    const { dispatch } = this.props;
    if (this.leads.length > 0) {
      dispatch(leadActions.addMany(this.leads));
    }
  }
  onDrop(picture, id) {
    console.log("logging PICTUREsell:", picture, id);
    this.setState({
      pictures: this.state.pictures.concat(picture),
      id,
    });
  }

  onUpload() {
    const { dispatch } = this.props;
    const { pictures, employee_id, employer_id } = this.state;
    console.log("save data:", employee_id, employer_id, pictures);
    const formdata = new FormData();
    pictures &&
      pictures.map((picture) => {
        formdata.append("documents", picture);
      });
    formdata.append("employee_id", employee_id);
    formdata.append("employer_id", employer_id);
    dispatch(employeeActions.uploadDocument(formdata));
  }
  render() {
    const { employees } = this.props;
    const { open } = this.state;

    return (
      <>
        <div>
          <div
            className="container-fluid"
            style={{ background: "white", paddingTop: "15px" }}
          >
            <div>
              <div
                className="submit-button"
                onClick={() => {
                  this.addMany();
                }}
              >
                Submit
              </div>
            </div>

            <DataTable
              title="Employees"
              columns={this.columns}
              data={employees || []}
              onRowClicked={(row) => {}}
            />
            <Modal open={open} onClose={this.onCloseModal} center>
              <ImageUploader
                withPreview={true}
                withIcon={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
              <div style={{ textAlign: "center" }}>
                <div
                  className="submit-button"
                  style={{ padding: "6px 5px" }}
                  onClick={() => {
                    this.onUpload();
                  }}
                >
                  Upload documents
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { employees } = state;
  return { employees: employees.employer_employees };
}
const connectedViewEmployees = connect(mapStateToProps)(ViewEmployees);
export default connectedViewEmployees;
