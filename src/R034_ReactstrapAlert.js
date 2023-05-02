import React, { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class R034_ReactstrapAlert extends Component {
  render() {
    return (
      <div>
        <Alert color="white">Simple Alert [color : white]</Alert>
        <UncontrolledAlert color="warning">
          UncontrolledAlert [color : warning]
        </UncontrolledAlert>
      </div>
    );
  }
}

export default R034_ReactstrapAlert;
