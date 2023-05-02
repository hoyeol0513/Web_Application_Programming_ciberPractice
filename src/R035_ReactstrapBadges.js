import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        {/* 테두리를 둥글게 적용 */}
        <Badge color="danger" pill>
          pill
        </Badge>
        {/* 배지에 링크를 연결 */}
        <Badge href="http://example.com" color="light">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default R035_ReactstrapBadges;
