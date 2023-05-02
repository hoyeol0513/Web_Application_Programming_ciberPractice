import React, { Component } from "react";
import datatype from "prop-types";

class R021_PropsRequired extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}
R021_PropsRequired.propTypes = {
  // 반드시 상위 컴포넌트에서 전달해야 한다면 isRequired를 달기
  ReactString: datatype.isRequired,
};

export default R021_PropsRequired;
