import React, { Component } from "react";

class R005_Lifecycle extends Component {
  // constructor : 생명주기 함수 중 가장 먼저 실행, 처음 한번만 호출됨.
  /* 
  component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 
  전달받은 변수(props)를 초기화할 때 사용함. (super는 가장위에 호출해야 함.)
  */
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    console.log("3. render Call");
    return (
      <div>
        <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
      </div>
    );
  }
}

export default R005_Lifecycle;
