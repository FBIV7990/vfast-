import React, { Component } from "react";
import { connect } from "react-redux";
class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      isError: false,
    };
  }

  selectionChanged(index) {
    var selectedIndex = index.target.selectedIndex;
    this.setState({ selectedValue: selectedIndex });
    if (this.props.onSelect)
      this.props.onSelect(this.props.name, selectedIndex);
  }
  render() {
    const { data, label, required, message } = this.props;
    if (!data) return <p>No data</p>;
    const listItems = data.map((item, i) => (
      <option value={item.name}>{item.name}</option>
    ));
    return (
      <div style={{ padding: 10 }}>
        <p>
          {label}
          {required ? "*" : ""}
        </p>
        {/* <Text>{message}</Text> */}
        <div style={{ borderWidth: 1, marginTop: 3, borderRadius: 3 }}>
          <select
            className="form-1-style2 border1 borderf7 b-radius3"
            selectedValue={this.state.selectedValue}
            onChange={(item) => {
              this.selectionChanged(item);
            }}
          >
            {listItems}
          </select>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

const connectedSelectBox = connect(mapStateToProps)(SelectBox);
export { connectedSelectBox as SelectBox };
