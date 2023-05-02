import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        {/* 웹브라우저 elements를 확인하면 모두 tag로 바뀌어있음 */}
        {/* 보통 네비게이션 1장, 2장, or Top, bottom 할때 주로 이용 */}
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">
            Go_Top
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">
            Go_Bottom
          </BreadcrumbItem>
        </Breadcrumb>
        <div id="bottom" style={{ marginTop: "1000px" }}>
          <span>bottom</span>
        </div>
      </div>
    );
  }
}

export default R036_ReactstrapBreadcrumbs;
