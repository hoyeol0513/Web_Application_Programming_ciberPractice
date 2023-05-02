import React, { Component } from "react";

class R006_Lifecycle extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call");
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    return (
      <div>
        <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
      </div>
    );
  }
}

export default R006_Lifecycle;
