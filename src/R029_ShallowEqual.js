import React, { Component } from "react";
// import { shallowEqualArrays } from "shallow-equal";

//purecomponent는 shallow-equal을 이용하는 것과 동일함.
class R029_ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }
  //setState로 state를 바꿨을 때, shouldComponentUpdate가 true를 return하면 render를 호출
  //setState로 state를 바꿨을 때, shouldComponentUpdate가 false를 return하면 render를 호출하지 않음. (여기서 끝)
  //state의 현재와 nextState가 같다면 바뀐것이 없는것 => false를 리턴, 같지 않다면 바뀌었다는 것 => true 리턴
  shouldComponentUpdate(nextProps, nextState) {
    // return !shallowEqualArrays(this.state, nextState);
  }

  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    //Array1,2,3 모두 내용은 똑같음.
    //하지만 Array1,2는 참조하는 변수명까지 똑같은 반면, Array3은 다름.
    // 따라서 Array2와 3은 shallowEqualArray로 비교했을 땐 다름. (1과2는 같음.)
    const Array3 = ["리액트", { react: "200" }];

    console.log(
      "shallowEqualArrays(Array1, Array2) : "
      // shallowEqualArrays(Array1, Array2)
    ); //true
    console.log(
      "shallowEqualArrays(Array2, Array3) : "
      // shallowEqualArrays(Array2, Array3)
    ); //false
    this.setState({ StateString: "react" });
  }
  render() {
    console.log("render() 실행");
    return <div></div>;
  }
}

export default R029_ShallowEqual;
