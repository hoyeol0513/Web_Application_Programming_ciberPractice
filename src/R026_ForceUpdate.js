import React, { Component } from "react";

class R026_ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }
  StateChange = () => {
    this.state.StateString = "리액트";
    this.forceUpdate(); //setState로 변경하는 것과 동일 (강제로 변경)
    // 하지만 사용하는 걸 추천하지 않음. setState로 변경 추천
  };
  render() {
    return (
      <div style={{ padding: "0px" }}>
        <button onClick={(e) => this.StateChange(e)}>state 직접 변경</button>
        <br />
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default R026_ForceUpdate;
