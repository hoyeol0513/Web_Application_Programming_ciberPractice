import React, { Component } from "react";
import datatype from "prop-types";

class R020_PropsObjVal extends Component {
  render() {
    let { ObjectJson } = this.props;
    return <div style={{ padding: "0px" }}>{JSON.stringify(ObjectJson)}</div>;
  }
}

R020_PropsObjVal.propTypes = {
  // 객체형 프로퍼티의 데이터 타입을 상세 지정할 때 shape를 사용
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number,
    // props로 넘겨준 "200"은 string인데 데이터타입을 number라고 지정해서 warning 이 발생
  }),
};

export default R020_PropsObjVal;
