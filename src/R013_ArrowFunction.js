import React, { Component } from "react";

class R013_ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: "React200",
      num: 3,
    };
  }
  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 3);
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Arrow Function : " + this.state.arrowFunc);
  };

  Function3() {
    var this_bind = this;
    setTimeout(function () {
      // bind하지 않았을 때
      //여기서 this는 window를 말함 => arrowFunc 를 가지고 있지 않아서 오류!!
      console.log(this_bind.state.num + ". Es5 Callback Function noBind : ");
      console.log(this.state.arrowFunc);
    }, 100);
  }

  //바인딩해주는 것이 좋음!! Function3처럼 변수 추가 x
  Function4() {
    setTimeout(
      function () {
        //.bind(this) 를 통해서 오류가 발생하지 않음. (바인딩!!)
        console.log("4. Es5 Callback Function Bind :" + this.state.arrowFunc);
      }.bind(this),
      100
    );
  }
  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    // 화살표 함수를 이용하면 .bind를 안해도 바인딩을 해줌!!
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFunc);
    }, 100);
  };
  render() {
    return <h2>[THIS IS ArrowFunction]</h2>;
  }
}

export default R013_ArrowFunction;
