import React from "react";
import { ClassicSpinner } from "react-spinners-kit";

class Loader extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
        {" "}
        <ClassicSpinner size={30} color="#FF8A65" loading={true} />
      </div>
    );
  }
}

export default Loader;
