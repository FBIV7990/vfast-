import React, { Component } from "react";
import { connect } from "react-redux";
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  textChanged(text) {
    // const { min, max } = this.props;
    // if (min && max) {
    //   var len = text.target.value.length;

    //   if (len <= max) {
    this.setState({
      text: text.target.value,
    });
    if (this.props.onTextChanged) {
      //console.log("event occured !!!!!!",text.target.value)
      this.props.onTextChanged(this.props.name, text.target.value);
    }
    //   }
    // }
  }

  render() {
    const { label, required, type } = this.props;
    return (
      <div style={{ width: "100%", marginBottom: 7 }}>
        <p style={{ margin: 0, padding: 0, marginLeft: "7px" }}>
          {label}
          {required ? "*" : ""}
        </p>
        <div>
          <input
            type={type}
            className="form-input"
            onChange={(val) => {
              this.textChanged(val);
            }}
            value={this.state.text}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { colors } = state;
  return {
    colors,
  };
}

const connectedTextBox = connect(mapStateToProps)(TextBox);
export { connectedTextBox as TextBox };
