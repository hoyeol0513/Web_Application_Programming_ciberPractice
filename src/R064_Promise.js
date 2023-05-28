import React, { Component } from "react";

//Promise then
class R064_Promise extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("react");
      }, 1500);
    }) //promise then 함수로 콜백함수의 계단식 복잡한 코드형태보다 가독성있게 구현
      .then(function (result) {
        console.log(result);
        return result + 200;
      })
      .then((result) => {
        console.log(result);
      });
  }
  render() {
    return <h1>Promise</h1>;
  }
}

export default R064_Promise;
