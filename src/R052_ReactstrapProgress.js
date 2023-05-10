import React, { Component } from "react";
import { Progress } from "reactstrap";

class R052_ReactstrapProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }
  componentDidMount() {
    this.progress();
  }
  progress = () => {
    if (this.state.progress !== 100) {
      setTimeout(
        function () {
          this.setState({ progress: this.state.progress + 1 });
          this.progress();
        }.bind(this),
        100
      );
    }
  };
  render() {
    return (
      <div>
        {/* value 는 진행도를 표시할 숫자 */}
        <Progress color="info" value={this.state.progress}>
          {this.state.progress}%
        </Progress>
        <br />
        {/* multi 속성을 이용해서 progress bar를 여러개 가능 */}
        <Progress multi>
          <Progress bar color="warning" value="25">
            25%
          </Progress>
          <Progress bar color="success" value="35">
            Wow!
          </Progress>
          <Progress bar value="15">
            Meh
          </Progress>
          <Progress bar color="danger" value="25">
            Look Out!!
          </Progress>
        </Progress>
      </div>
    );
  }
}

export default R052_ReactstrapProgress;
