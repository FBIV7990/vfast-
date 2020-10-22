import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

function getValues(obj, getString = true, seprator = "•") {
  let objval = obj_values(obj);
  if (getString) {
    return objval
      .join(seprator)
      .toLowerCase()
      .replace(/true|false|undefined|null:/gi, (x) => "")
      .trim();
  }
  return objval;

  function obj_values(ob) {
    if (ob instanceof Object) {
      let values = Object.values(ob);
      let val = values.reduce((f, v) => {
        if (v instanceof Object) {
          return [...f, ...obj_values(v)];
        }
        return [...f, v];
      }, []);
      return Array.from(new Set(val));
    }

    return ob;
  }
}

class MyDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: null,
      textSearch: "",
    };
  }
  componentDidMount() {
    //this.setState({ filterData: this.props.data });
  }
  search_onChange(e) {
    let value = e.target.value;
    // this.setState({ textSearch: value })
    let data = this.props.data;
    let filterData = data.filter((item) => {
      let str = getValues(item); //JSON.stringify(item).toLowerCase().replace(/{|}|\[|\]|,|"|'|:/gi, (x) => "");
      //  console.log(str);
      return str.includes(value.toLowerCase());
    });
    this.setState({ filterData, textSearch: value });
  }
  componentDidUpdate(p, s) {
    //if(this.props.data!=undefined)
    // if(p.data.length!=this.props.data.length && s.filterData!=null){
    //    // this.search_onChange({target:{value:this.state.textSearch}});
    //    this.setState({  filterData:null, textSearch: '' });
    // }
  }

  render() {
    const { title, columns, onRowClicked, data, sno } = this.props;

    let newColumns = [];
    let newData = [];

    newColumns = [{ name: "Sno.", selector: "sno", width: "60px" }, ...columns];
    newData =
      data &&
      data.map((item, i) => {
        return { sno: i + 1, ...item };
      });

    return (
      <DataTable
        columns={newColumns}
        // theme="solarized"
        //customStyles={}
        keyField="id"
        data={this.state.filterData ? this.state.filterData : newData}
        pagination={true}
        // responsive={true}
        expandableRows={this.props.expandableRows}
        expandOnRowClicked={this.props.expandOnRowClicked}
        expandableRowsComponent={this.props.expandableRowsComponent}
        highlightOnHover={this.props.expandOnRowClicked}
        conditionalRowStyles={this.props.conditionalRowStyles}
        onRowClicked={this.props.onRowClicked}
        pointerOnHover={true}
        // dense
        noHeader
        striped
        subHeader
        subHeaderComponent={
          <>
            <Row style={{ margin: 0, padding: 0 }}>
              <Col xs="12" sm={12}>
                {" "}
                <Form
                  style={{ float: "right" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  inline
                >
                  <Input
                    bsSize="md"
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Search"
                    value={this.state.textSearch}
                    onChange={this.search_onChange.bind(this)}
                  />
                </Form>
              </Col>
            </Row>
          </>
        }
      />
    );
  }
}

MyDataTable.defaultProps = {
  expandableRows: false,
  expandOnRowClicked: false,
  expandableRowsComponent: null,
  conditionalRowStyles: [],
};

export default MyDataTable;
