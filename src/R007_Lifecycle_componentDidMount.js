import React, { Component } from "react";

class R007_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2.getDerivedStateFromProps Call : " + props.prop_value);
    return { tmp_state: props.prop_value };
  }
}
