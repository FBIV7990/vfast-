import React, { Component } from "react";
import { connect } from "react-redux";

class NumberBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
    };
  }
  componentDidMount() {
    this.setState({ number: this.props.min });
  }
  textChanged(text) {
    const { min, max } = this.props;
    const num = text.target.value.replace(/[^0-9]/g, "");

    if (min && max) {
      if (num <= max) {
        this.setState({ number: num });
        if (this.props.onTextChanged)
          this.props.onTextChanged(this.props.name, num);
      }
    }
  }
  render() {
    //const {data}=this.props;
    const { label, required, message, min, max, colors } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <p>
          {label}
          {required ? "*" : ""}
        </p>
        {/* <Text>{message}</Text> */}
        <div style={{ borderWidth: 1, marginTop: 3, borderRadius: 3 }}>
          <input
            className="form-1-style2 border1 borderf7 b-radius3"
            type="number"
            value={this.state.number}
            onChange={(val) => {
              this.textChanged(val);
            }}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //  const { colors } = state;
  return state;
}

const connectedNumberBox = connect(mapStateToProps)(NumberBox);
export { connectedNumberBox as NumberBox };
