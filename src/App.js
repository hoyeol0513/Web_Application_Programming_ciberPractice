import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ClassPrototype from "./R012_ClassPrototype";
import R013_ArrowFunction from "./R013_ArrowFunction";
import Props from "./R017_Props";
import PropsDatatype from "./R018_PropsDatatype";
import PropsBoolean from "./R019_PropsBoolean";
import PropsObjVal from "./R020_PropsObjVal";
import PropsRequired from "./R021_PropsRequired";
import PropsDefault from "./R022_PropsDefault";
import PropsNode from "./R023_PropsNode";
import ReactState from "./R024_ReactState";
import SetState from "./R025_SetState";
import ForceUpdate from "./R026_ForceUpdate";
import ComponentClass from "./R027_ComponentClass";
import PureComponentClass from "./R028_PureComponent";
import ShallowEqual from "./R029_ShallowEqual";
import FunctionComponent from "./R030_FunctionComponent";
import ReactHook from "./R031_ReactHook";
import Fragments from "./R032_Fragments";
import ReturnMap from "./R033_ReturnMap";
import ReactstrapAlert from "./R034_ReactstrapAlert";
import ReactstrapBadges from "./R035_ReactstrapBadges";
import ReactstrapBreadcrumbs from "./R036_ReactstrapBreadcrumbs";
import ReactstrapDropdown from "./R037_ReactstrapDropdown";
import ReactstrapButtonGroup from "./R038_ReactstrapButtonGroup";
import RactstrapBotton from "./R039_ReactstrapBottons";
import ReactstrapCard from "./R040_ReactstrapCard";
import ReactstrapCarousel from "./R041_ReactstrapCarousel";
import ReactstrapCollapse from "./R042_ReactstarpCollapse";
import ReactstrapFade from "./R043_ReactstrapFade";
import ReactstrapForm from "./R044_ReactstrapForm";
import ReactstrapInputGroup from "./R045_ReactstrapInputGroup";
import ReactstrapJumbotron from "./R046_ReactstrapJumbotron";
import ReactstrapListGroup from "./R047_ReactstrapListGroup";
function App() {
  return (
    // return 문은 div로 한번만 감싸야 한다.
    // ⭐ 여기에서 주석을 풀고 컴포넌트 형태로 모두 실습하면 됨. ⭐
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* App.js 에서 import한 컴포넌트인 LifeCycle 로 prop_value를 전달함. */}
      {/* <LifeCycle prop_value="FromApp.js" /> */}

      {/* <ClassPrototype /> */}

      {/* <R013_ArrowFunction /> */}

      {/* <Props props_vals="THIS IS PROPS" /> */}

      {/* <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps: function!")}
      /> */}

      {/* <PropsBoolean BooleanTrueFalse={false} /> */}
      {/* 아무것도 주지 않았을 때는 default 값이 들어감 (true) */}
      {/* <PropsBoolean BooleanTrueFalse /> */}

      {/* <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} /> */}

      {/* <PropsRequired ReactNumber={200} /> */}

      {/* <PropsDefault ReactNumber={200} /> */}

      {/* <PropsNode>
        <span>node from App.js (자식(Children)에 전달할 노드 작성)</span>
      </PropsNode> */}

      {/* <ReactState reactString={"react"} /> */}

      {/* <SetState /> */}

      {/* <ForceUpdate /> */}

      {/* <ComponentClass /> */}

      {/* <PureComponentClass /> */}

      {/* <ShallowEqual /> */}

      {/* <FunctionComponent contents="[ THIS IS FunctionComponent }" /> */}

      {/* <ReactHook /> */}

      {/* <Fragments /> */}

      {/* <ReturnMap /> */}

      {/* <ReactstrapAlert /> */}

      {/* <ReactstrapBadges /> */}

      {/* <ReactstrapBreadcrumbs /> */}

      {/* <ReactstrapDropdown /> */}

      {/* <ReactstrapButtonGroup /> */}

      {/* <RactstrapBotton /> */}

      {/* <ReactstrapCard /> */}

      {/* <ReactstrapCarousel /> */}

      {/* <ReactstrapCollapse /> */}

      {/* <ReactstrapFade /> */}

      {/* <ReactstrapForm /> */}

      {/* <ReactstrapInputGroup /> */}

      {/* <ReactstrapJumbotron /> */}

      <ReactstrapListGroup />
    </div>
  );
}

// 사용하기 위해서 export 함.
// default로 export 하면 import 할때 이름 바꿔도 됨.
export default App;
