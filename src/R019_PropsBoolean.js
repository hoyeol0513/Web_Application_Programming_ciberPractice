import React, { Component } from "react";

class R019_PropsBoolean extends Component {
  render() {
    let { BooleanTrueFalse } = this.props; //boolean값의 디폴트값은 true
    return (
      <div style={{ padding: "0px" }}>
        {/* 처음에 들어온 값 = false => 1. ~ */}
        {BooleanTrueFalse ? "2. " : "1. "}
        {BooleanTrueFalse.toString()}
      </div>
    );
  }
}

export default R019_PropsBoolean;
