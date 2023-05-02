import React, { Component } from "react";

class R027_ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }
  buttonClick = (type) => {
    if (type == "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };
  render() {
    //버튼을 클릭할 때마다 state가 바뀌기 때문에 render가 실행됨!!
    //따라서 버튼이 클릭될 때 마다 console.log가 실행되는 것
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

export default R027_ComponentClass;
