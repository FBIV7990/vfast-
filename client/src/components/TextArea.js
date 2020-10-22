import React, { Component } from "react";
import { connect } from "react-redux";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  textChanged(text) {
    const { min, max } = this.props;
    if (min && max) {
      var len = text.target.value.length;

      if (len <= max) {
        this.setState({
          text: text.target.value,
        });
        if (this.props.onTextChanged)
          this.props.onTextChanged(this.props.name, text.target.value);
      }
    }
  }

  render() {
    const { label, required, message, min, max, colors } = this.props;
    return (
      <div style={{ width: "100%", padding: 10 }}>
        <p>
          {label}
          {required ? "*" : ""}
        </p>
        {/* <Text>{message}</Text> */}
        <div
          style={{
            borderColor: "black",
            width: "100%",
            borderWidth: 1,
            marginTop: 3,
            borderRadius: 3,
          }}
        >
          <textarea
            className="form-1-style2 border1 borderf7 b-radius3"
            style={{ lineHeight: "20px" }}
            onChange={(val) => {
              this.textChanged(val);
            }}
            value={this.state.text}
          ></textarea>
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

const connectedTextArea = connect(mapStateToProps)(TextArea);
export { connectedTextArea as TextArea };
