import React, { Component } from "react";

//onMouseMove 는 해당 엘리먼트 위에서 마우스 커서를 움직일 경우
class R068_onMouseMove extends Component {
  MouseMove(tag) {
    console.log("TAG : " + tag);
  }
  render() {
    return (
      <div>
        <div onMouseMove={(e) => this.MouseMove}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={(e) => this.MouseMove("input")} />
        <select onMouseMove={(e) => this.MouseMove("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}

export default R068_onMouseMove;
