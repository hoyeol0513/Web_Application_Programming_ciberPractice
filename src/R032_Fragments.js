import React, { Component } from "react";

class R032_Fragments extends Component {
  render() {
    return (
      // 꼭 React.Fragment를 사용하지 않아도 됨. div나 <></>같이 빈 태그도 가능.
      <React.Fragment>
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </React.Fragment>
    );
  }
}

export default R032_Fragments;
