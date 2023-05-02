import React, { Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

class R042_ReactstarpCollapse extends Component {
  render() {
    return (
      <div>
        <Button color="warning" id="toggle">
          펼치기/접기
        </Button>
        {/* toggle 아이디에 따라서 아래 내용이 펼치고 접고 하는 것 */}
        <UncontrolledCollapse toggler="#toggle">
          <Card>
            <CardBody>REACT 200</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default R042_ReactstarpCollapse;
