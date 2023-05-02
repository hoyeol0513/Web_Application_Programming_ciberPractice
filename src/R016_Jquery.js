import React, { Component } from "react";

class R016_Jquery extends Component {
  input_alert = (e) => {
    var input_Val = $("#inputId").val();
    alert(input_Val);
  };
  render() {
    return (
      <div>
        <h2>[THIS IS Jquery]</h2>
        <input id="inputId" name="inputName" />
        <button id="buttonId" onClick={(e) => this.input_alert}>
          Jquery Button
        </button>
      </div>
    );
  }
}

export default R016_Jquery;
