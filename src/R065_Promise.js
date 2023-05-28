import React, { Component } from "react";

class R065_Promise extends Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error("ERROR Info"));
      //Promise 동작 중 거부함수(reject)가 실행되면 이행상태 x
      //이행 상태가 되지 못하기 때문에 then 실행 x
    })
      .then((result) => console.log("then " + result))
      //promise의 상태가 거부로 변하면서 catch 함수 실행
      .catch((result) => console.log("catch : " + result));
  }
  render() {
    return <h1>Promise</h1>;
  }
}

export default R065_Promise;
