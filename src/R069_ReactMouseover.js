import React, { Component } from "react";

class R069_ReactMouseover extends Component {
  Mouseover(tag) {
    console.log("TAG : " + tag);
  }
  render() {
    return (
      <div>
        <div onMouseOver={(e) => this.Mouseover("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={(e) => this.Mouseover("input")} />
        <select onMouseOver={(e) => this.Mouseover("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}

export default R069_ReactMouseover;
