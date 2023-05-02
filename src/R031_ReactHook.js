import React, { useEffect, useState } from "react";

function R031_ReactHook(props) {
  //함수형 컴포넌트에서는 useState와 useEFfect를 사용가능
  const [contents, setContents] = useState("[ THIS IS REACT ]");
  //useState는 변수와 함수를 각각 받을 수 있음.
  //contents값의 초기값으로 useState안에 값을 설정, setContents 는 contents값을 수정하기 위한 함수
  useEffect(() => {
    console.log("useEffect");
  });
  //useEffect는 생명주기 함수 componentDidMount와 같음.
  //return 되는 html 코드들이 화면에 그려진 이후에 실행됨.
  //최초 페이지가 로딩될때 한번 실행, setContents 함수로 state값이 변경되면 한번더 실행됨.
  // useEffect의 deps를 통해 deps안에 변수가 수정될 때만 실행할 수도 있음.
  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[ THIS IS HOOK ]")}>버튼</button>
    </div>
  );
}

export default R031_ReactHook;
