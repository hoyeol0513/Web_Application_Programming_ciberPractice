import React, { Component } from "react";

class R003_ImportComponent extends Component {
  render() {
    // 클래스형 컴포넌트는 RENDER함수 안에 RETURN함수
    // render함수는 return 되는 형식의 html 코드를 화면에 그려주는 함수. (화면내용이 변경돼야 할 지점에 자동 호출됨.)
    return (
      <div>
        <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
      </div>
    );
  }
}

export default R003_ImportComponent;
