import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
//image 슬라이드 한장한장 넘기면서 볼 때 사용
const items = [
  {
    src: "https://picsum.photos/200/300",
    altText: "슬라이드1 이미지 대체 문구",
    caption: "슬라이드1 설명",
    header: "슬라이드1 제목",
  },
  {
    src: "https://picsum.photos/200/300",
    altText: "슬라이드2 이미지 대체 문구",
    caption: "슬라이드2 설명",
    header: "슬라이드2 제목",
  },
  {
    src: "https://picsum.photos/200/300",
    altText: "슬라이드3 이미지 대체 문구",
    caption: "슬라이드3 설명",
    header: "슬라이드3 제목",
  },
];
class R041_ReactstrapCarousel extends Component {
  render() {
    return <UncontrolledCarousel items={items} />;
  }
}

export default R041_ReactstrapCarousel;
