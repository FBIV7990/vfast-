import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import DataTable, { createTheme } from "react-data-table-component";
import { vendorActions, locationActions } from "../../../actions";
import { Modal } from "react-responsive-modal";
import DataTable from "../../../components/DataTable";

class AddRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physical_check_rural_min: "",
      physical_check_rural_max: "",
      physical_check_urban_min: "",
      physical_check_urban_max: "",
      physical_check_turn_around_time: "",

      pre_employment_check_rural_min: "",
      pre_employment_check_rural_max: "",
      pre_employment_check_urban_min: "",
      pre_employment_check_urban_max: "",
      pre_employment_check_turn_around_time: "",

      education_check_rural_min: "",
      education_check_rural_max: "",
      education_check_urban_min: "",
      education_check_urban_max: "",
      education_check_turn_around_time: "",

      judicial_check_rural_min: "",
      judicial_check_rural_max: "",
      judicial_check_urban_min: "",
      judicial_check_urban_max: "",
      judicial_check_turn_around_time: "",

      cibil_check_rural_min: "",
      cibil_check_rural_max: "",
      cibil_check_urban_min: "",
      cibil_check_urban_max: "",
      cibil_check_turn_around_time: "",

      drug_test_rural_min: "",
      drug_test_rural_max: "",
      drug_test_urban_min: "",
      drug_test_urban_max: "",
      drug_test_turn_around_time: "",

      vendorstate: "",
      data: [],
      open: false,
      newData: {},
      disable: false,
    };
  }

  onAddData() {
    // alert('addData');
    const {
      physical_check_rural_min,
      physical_check_rural_max,
      physical_check_urban_min,
      physical_check_urban_max,
      physical_check_turn_around_time,
      pre_employment_check_rural_min,
      pre_employment_check_rural_max,
      pre_employment_check_urban_min,
      pre_employment_check_urban_max,
      pre_employment_check_turn_around_time,
      education_check_rural_min,
      education_check_rural_max,
      education_check_urban_min,
      education_check_urban_max,
      education_check_turn_around_time,
      judicial_check_rural_min,
      judicial_check_rural_max,
      judicial_check_urban_min,
      judicial_check_urban_max,
      judicial_check_turn_around_time,
      cibil_check_rural_min,
      cibil_check_rural_max,
      cibil_check_urban_min,
      cibil_check_urban_max,
      cibil_check_turn_around_time,
      drug_test_rural_min,
      drug_test_rural_max,
      drug_test_urban_min,
      drug_test_urban_max,
      drug_test_turn_around_time,
      vendorstate,
      data,
      stateArray,
    } = this.state;
    console.log("add model", data);
    // const stateArray=data&&data.filter((item)=>{
    //   return item.state!=vendorstate;
    // })
    this.setState({ vendorstate: stateArray });
    const newData = [
      {
        state: vendorstate,
        physical_check: {
          rural: {
            min: physical_check_rural_min,
            max: physical_check_rural_max,
          },
          urban: {
            min: physical_check_urban_min,
            max: physical_check_urban_max,
          },
          turn_around_time: physical_check_turn_around_time,
          //  active:true,
        },
        education_check: {
          rural: {
            min: education_check_rural_min,
            max: education_check_rural_max,
          },
          urban: {
            min: education_check_urban_min,
            max: education_check_urban_max,
          },
          turn_around_time: education_check_turn_around_time,
          //active:true,
        },
        pre_employment_check: {
          rural: {
            min: pre_employment_check_rural_min,
            max: pre_employment_check_rural_max,
          },
          urban: {
            min: pre_employment_check_urban_min,
            max: pre_employment_check_urban_max,
          },
          turn_around_time: pre_employment_check_turn_around_time,
          // active:true,
        },
        cibil_check: {
          rural: {
            min: cibil_check_rural_min,
            max: cibil_check_rural_max,
          },
          urban: {
            min: cibil_check_urban_min,
            max: cibil_check_urban_max,
          },
          turn_around_time: cibil_check_turn_around_time,
          //active:true,
        },
        judicial_check: {
          rural: {
            min: judicial_check_rural_min,
            max: judicial_check_rural_max,
          },
          urban: {
            min: judicial_check_urban_min,
            max: judicial_check_urban_max,
          },
          turn_around_time: judicial_check_turn_around_time,
          // active:true,
        },

        drug_test: {
          rural: {
            min: drug_test_rural_min,
            max: drug_test_rural_max,
          },
          urban: {
            min: drug_test_urban_min,
            max: drug_test_urban_max,
          },
          turn_around_time: drug_test_turn_around_time,
          // active:true,
        },
      },
    ];
    if (data && data.length > 0)
      this.setState((state) => ({ data: state.data.concat(newData) }));
    else {
      this.setState((state) => ({ open: !state.open, data: newData }));
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    //   alert('alert')
    dispatch(locationActions.getAll());
    dispatch(vendorActions.getById(id));
  }

  columns = [
    {
      name: "state",
      selector: "state",
      cell: (row) => <div>{row.state}</div>,
    },

    {
      name: "Physical check",
      cell: (row) => (
        <div>
          {" "}
          Rural: {row.physical_check.rural.min}-{row.physical_check.rural.max}
          <br />
          Urban: {row.physical_check.urban.min}-{row.physical_check.urban.max}
        </div>
      ),
    },

    {
      name: "Pre Employment Check",

      cell: (row) => (
        <div>
          {" "}
          Rural: {row.pre_employment_check.rural.min}-
          {row.pre_employment_check.rural.max}
          <br />
          Urban: {row.pre_employment_check.urban.min}-
          {row.pre_employment_check.urban.max}
        </div>
      ),
    },

    {
      name: "Education Check",

      cell: (row) => (
        <div>
          {" "}
          Rural {row.education_check.rural.min}-{row.education_check.rural.max}
          <br />
          Urban {row.education_check.urban.min}-{row.education_check.urban.max}
        </div>
      ),
    },
    {
      name: "Judicial Check",

      cell: (row) => (
        <div>
          {" "}
          Rural:{row.judicial_check.rural.min}-{row.judicial_check.rural.max}
          <br />
          Urban: {row.judicial_check.urban.min}-{row.judicial_check.urban.max}
        </div>
      ),
    },
    {
      name: "CIBIL Check",

      cell: (row) => (
        <div>
          {" "}
          Rural {row.cibil_check.rural.min}-{row.cibil_check.rural.max}
          <br />
          Urban {row.cibil_check.urban.min}-{row.cibil_check.urban.max}
        </div>
      ),
    },
    {
      name: "Drug Test",

      cell: (row) => (
        <div>
          Rural {row.drug_test.rural.min}
          {row.drug_test.rural.max}
          <br />
          Urban {row.drug_test.urban.min}
          {row.drug_test.urban.max}
        </div>
      ),
    },
  ];

  selectLocation(event, key) {
    //  alert("sef")
    this.setState({ [key]: event.target.value });
  }
  onValueChanged(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onSubmit() {
    const id = this.props.match.params.id;
    const { data } = this.state;

    const finaldata = { vendor_id: id, rate_list: data };

    console.log(finaldata);

    // alert(JSON.stringify(data))
    //console.log('logging saveData:',data);
    // const dataList=JSON.stringify(data);
    //const dataSave={
    //    vendor_id:id,
    // rate_list:[{
    //     state:data.state,
    //     physical_check:{
    //         rural:{
    //             min:data.physical_check.rural.min,
    //             max:data.physical_check.rural.max,
    //         },
    //         urban:{
    //             min:data.physical_check.urban.min,
    //             max:data.physical_check.urban.max,
    //         },
    //        turn_around_time: data.physical_check.turn_around_time,
    //        active:true,
    //     },
    //     education_check :{
    //         rural:{
    //             min:data.education_check.rural.min,
    //             max:data.education_check.rural.max,
    //         },
    //         urban:{
    //             min:data.education_check.urban.min,
    //             max:data.education_check.urban.max,
    //         },
    //         turn_around_time: data.education_check.turn_around_time,
    //         active:true,
    //     },
    //     pre_employment_check:{
    //         rural:{
    //             min:data.pre_employment_check.rural.min,
    //             max:data.pre_employment_check.rural.max,
    //         },
    //         urban:{
    //             min:data.pre_employment_check.urban.min,
    //             max:data.pre_employment_check.urban.max,
    //         },
    //         turn_around_time: data.pre_employment_check.turn_around_time,
    //         active:true,
    //     },
    //    cibil_check :{
    //         rural:{
    //             min:data.cibil_check.rural.min,
    //             max:data.cibil_check.rural.max,
    //         },
    //         urban:{
    //             min:data.cibil_check.urban.min,
    //             max:data.cibil_check.urban.max,
    //         },
    //         turn_around_time: data.cibil_check.turn_around_time,
    //         active:true,
    //     },
    //    judicial_check :{
    //         rural:{
    //             min:data.judicial_check.rural.min,
    //             max:data.judicial_check.rural.max,
    //         },
    //         urban:{
    //             min:data.judicial_check.urban.min,
    //             max:data.judicial_check.urban.max,
    //         },
    //         turn_around_time: data.judicial_check.turn_around_time,
    //         active:true,
    //     },

    //     drug_test :{
    //         rural:{
    //             min:data.drug_test.rural.min,
    //             max:data.drug_test.rural.max,
    //         },
    //         urban:{
    //             min:data.drug_test.urban.min,
    //             max:data.drug_test.urban.max,
    //         },
    //         turn_around_time: data.drug_test.turn_around_time,
    //         active:true,
    //     },
    // }]
    //}

    const { dispatch } = this.props;
    dispatch(vendorActions.addRates(finaldata));
  }

  sortDel(val) {
    const arr = this.state.sorting_options.filter((item) => {
      return item.key != val;
    });

    this.setState({ sorting_options: arr });
  }

  // onChangeState(e,key){
  //   const { vendor,alert } = this.props;
  // console.log('logging changestate',vendor.rate_list[e.target.value]);
  //   this.setState({data:vendor.rate_list[e.target.value]})
  // }
  render() {
    const { vendor } = this.props;
    const { data, open } = this.state;
    console.log("data ratelist:", data, vendor);
    // const locationList = location&&location.states&&location.states.map((loc,i)=>(

    //     <option key={i+1} value={loc.name}>{loc.name}</option>
    //              ));
    return (
      <div>
        <div
          className="container"
          style={{
            paddingBottom: "20px",
            backgroundColor: "white",
            // margin:'10px 0px',
            borderRadius: "7px",
            boxShadow: "rgb(71, 65, 62) 0px 4px 11px -6px",
          }}
        >
          <div className="row" style={{ padding: "0px" }}>
            <div className="col-sm-12" style={{ padding: "20px" }}>
              <div className="col-sm-12" style={{ padding: "10px" }}>
                <div>
                  <label>Select State:</label>
                  <br />
                  <select
                    class="form-select"
                    value={this.state.vendorstate}
                    onChange={(change) => {
                      this.selectLocation(change, "vendorstate");
                    }}
                  >
                    <option>Location</option>
                    <option value="Delhi" key="delhi">
                      Delhi
                    </option>
                    <option value="Mumbai" key="mumbai">
                      Mumbai
                    </option>
                    <option value="Pune" key="pune">
                      Pune
                    </option>
                    <option value="Up" key="up">
                      Up
                    </option>
                    {/* {locationList} */}
                  </select>
                  {/* <select onChange={(e)=>{this.onChangeState(e,'vendorstate')}}><option >Select State</option>{vendorState}</select> */}
                </div>
              </div>
              <br />

              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  <div className="rate-heading">Physical Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.physical_check_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "physical_check_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.physical_check_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "physical_check_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.physical_check_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "physical_check_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.physical_check_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "physical_check_urban_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Turn Around Time:</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Time"
                    value={this.state.physical_check_turn_around_time}
                    onChange={(e) => {
                      this.onValueChanged(e, "physical_check_turn_around_time");
                    }}
                  />
                </div>
                <br />
              </div>
              <br />
              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  {" "}
                  <div className="rate-heading">Education Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.education_check_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "education_check_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.education_check_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "education_check_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.education_check_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "education_check_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.education_check_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "education_check_urban_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <div>
                    {" "}
                    <label>Turn Around Time:</label>
                    <br />
                    <input
                      className="rate-input"
                      type="text"
                      placeholder="Time"
                      value={this.state.education_check_turn_around_time}
                      onChange={(e) => {
                        this.onValueChanged(
                          e,
                          "education_check_turn_around_time"
                        );
                      }}
                    />
                  </div>
                </div>
                <br />
              </div>

              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  {" "}
                  <div className="rate-heading">Pre-employment Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.pre_employment_check_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "pre_employment_check_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.pre_employment_check_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "pre_employment_check_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.pre_employment_check_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "pre_employment_check_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.pre_employment_check_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "pre_employment_check_urban_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <div>
                    {" "}
                    <label>Turn Around Time:</label>
                    <br />
                    <input
                      className="rate-input"
                      type="text"
                      placeholder="Time"
                      value={this.state.pre_employment_check_turn_around_time}
                      onChange={(e) => {
                        this.onValueChanged(
                          e,
                          "pre_employment_check_turn_around_time"
                        );
                      }}
                    />
                  </div>
                </div>
                <br />
              </div>

              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  <div className="rate-heading">Cibil Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.cibil_check_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "cibil_check_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.cibil_check_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "cibil_check_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.cibil_check_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "cibil_check_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.cibil_check_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "cibil_check_urban_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <div>
                    {" "}
                    <label>Turn Around Time:</label>
                    <br />
                    <input
                      className="rate-input"
                      type="text"
                      placeholder="Time"
                      value={this.state.cibil_check_turn_around_time}
                      onChange={(e) => {
                        this.onValueChanged(e, "cibil_check_turn_around_time");
                      }}
                    />
                  </div>
                </div>
                <br />
              </div>

              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  {" "}
                  <div className="rate-heading">Judicial Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.judicial_check_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "judicial_check_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.judicial_check_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "judicial_check_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.judicial_check_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "judicial_check_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.judicial_check_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "judicial_check_urban_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <div>
                    {" "}
                    <label>Turn Around Time:</label>
                    <br />
                    <input
                      className="rate-input"
                      type="text"
                      placeholder="Turn around time"
                      value={this.state.judicial_check_turn_around_time}
                      onChange={(e) => {
                        this.onValueChanged(
                          e,
                          "judicial_check_turn_around_time"
                        );
                      }}
                    />
                  </div>
                </div>
                <br />
              </div>

              <div className="col-sm-12">
                <div className="col-sm-2" style={{ padding: 0 }}>
                  {" "}
                  <div className="rate-heading">Drug Check</div>
                </div>
                <div className="col-sm-2">
                  <label>Rural:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.drug_test_rural_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "drug_test_rural_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Rural:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.drug_test_rural_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "drug_test_rural_max");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Min Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Min Price"
                    value={this.state.drug_test_urban_min}
                    onChange={(e) => {
                      this.onValueChanged(e, "drug_test_urban_min");
                    }}
                  />
                </div>
                <div className="col-sm-2">
                  <label>Urban:Max Price</label>
                  <br />
                  <input
                    className="rate-input"
                    type="text"
                    placeholder="Max Price"
                    value={this.state.drug_test_urban_max}
                    onChange={(e) => {
                      this.onValueChanged(e, "drug_test_urban_max");
                    }}
                  />
                </div>

                <div className="col-sm-2">
                  <div>
                    {" "}
                    <label>Turn Around Time:</label>
                    <br />
                    <input
                      className="rate-input"
                      type="text"
                      placeholder="Turn around time"
                      value={this.state.drug_test_turn_around_time}
                      onChange={(e) => {
                        this.onValueChanged(e, "drug_test_turn_around_time");
                      }}
                    />
                  </div>
                </div>
                <br />
              </div>
              <br />

              <div style={{ textAlign: "center", margin: "20px" }}>
                <div
                  className="submit-button"
                  onClick={() => {
                    this.onAddData();
                  }}
                >
                  Add{" "}
                </div>
              </div>
            </div>
          </div>

          {this.state.open ? (
            <div style={{ padding: "20px" }}>
              <DataTable
                title="Rate list"
                columns={this.columns}
                data={data || []}
                onRowClicked={(row) => {
                  // this.onRowClicked(row);
                }}
              />
              <div className="top30" style={{ textAlign: "center" }}>
                <div className="submit-button" onClick={() => this.onSubmit()}>
                  Save
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, location, vendors } = state;
  console.log("logging location", location);
  return { alert, vendor: vendors.selected_vendor };
}

const connectedAddRates = connect(mapStateToProps)(AddRates);
export default connectedAddRates;
