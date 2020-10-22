import React from "react";
import ReactDataGrid from "react-data-grid";
// import "../../../../node_modules/react-data-grid/dist/react-data-grid.css";
import "../../../../node_modules/react-data-grid/dist/react-data-grid.css";
// import readXlsxFile from 'read-excel-file';
import { connect } from "react-redux";
import { employeeActions, employerActions } from "../../../actions";
import * as XLSX from "xlsx";

function CSVToJSON(csvData) {
  // var data = CSVToArray(csvData);
  var data = csvData;
  var objData = [];
  for (var i = 1; i < data.length; i++) {
    objData[i - 1] = {};
    for (var k = 0; k < data[0].length && k < data[i].length; k++) {
      var key = data[0][k];
      key = key.replace(/[^A-Z0-9]+/gi, "_");
      objData[i - 1][key] = data[i][k];
    }
  }
  var jsonData = JSON.stringify(objData);
  jsonData = jsonData.replace(/},/g, "},\r\n");
  return JSON.parse(jsonData);
}

class BulkUpload extends React.Component {
  state = { rows: [], columns: [] };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  getCellActions = (column, row) => {
    const cellActions = {
      actions: [
        {
          icon: <span className="glyphicon glyphicon-remove" />,
          callback: () => {
            this.setState({
              rows: this.state.rows.filter((item) => item.id !== row.id),
            });
          },
        },
      ],
    };

    return cellActions[column.key];
  };

  onFileSelected(e) {
    var file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const columns = dataParse[0].map((item) => {
        return { key: item, name: item, editable: true, resizable: true };
      });

      this.setState({
        columns: [
          { key: "actions", name: "Remove", resizable: true },
          { key: "id", name: "Id", resizable: true },
          ...columns,
        ],
      });
      dataParse.shift();

      const rows = dataParse.map((row) => {
        var data = {};
        row.map((r, i) => {
          data[columns[i].key] = r.toString();
        });
        return data;
      });

      this.setState({
        rows: rows.map((row, i) => {
          return { id: i + 1, ...row };
        }),
      });
    };
    reader.readAsBinaryString(file);
  }

  onSaveData() {
    const { employer, dispatch } = this.props;
    console.log(employer);
    if (this.props.match.params.id) {
      const employees = this.state.rows.map((emp) => {
        delete emp.id;
        return emp;
      });

      const id = this.props.match.params.id;
      const data = {
        employer_id: id,
        employees: employees,
      };

      dispatch(employeeActions.addMany(data));
    } else {
      alert("Employer id not found");
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    //alert(JSON.stringify(this.props.match.params))
    // dispatch(employerActions)
    // dispatch(employerActions.getAll());
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <div>
        <div>
          <input
            type="file"
            onChange={(e) => {
              this.onFileSelected(e);
            }}
          />
        </div>

        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={this.state.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          minHeight={550}
          getCellActions={this.getCellActions}
        />

        <div
          className="submit-button"
          onClick={() => {
            this.onSaveData();
          }}
        >
          Save
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { employers } = state;
  return { employer: employers.selected_employer };
}

const connectedBulkUpload = connect(mapStateToProps)(BulkUpload);
export default connectedBulkUpload;
