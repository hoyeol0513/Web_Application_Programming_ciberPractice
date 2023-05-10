import React, { Component } from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

class R051_ReactstrapPopover extends Component {
  render() {
    return (
      <div>
        <Button id="Popover_id" type="button">
          Popover button
        </Button>
        {/* 중요 : target의 id가 button의 id랑 똑같아야 함!! */}
        <UncontrolledPopover placement="right" target="Popover_id">
          <PopoverHeader>React 200</PopoverHeader>
          <PopoverBody>
            Aenean id magna id risus congue ornare. Vestibulum sed diam et mi
            pulvinar facilisis sed eu risus.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}

export default R051_ReactstrapPopover;
