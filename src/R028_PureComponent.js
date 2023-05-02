import React, { PureComponent } from "react";

class R028_PureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }
  //PureComponent를 상속받아서 PureComponent를 사용한다면
  //state 값이 바뀌지않으면 rerender를 하지 않는다!!
  //단, 객체의 setState가 실행되면 state값이 변경됐다고 간주하고 rerender 함!!
  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };
  render() {
    console.log("render() 실행");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default R028_PureComponent;
