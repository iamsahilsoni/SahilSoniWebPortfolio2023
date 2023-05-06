import React, { Component } from "react";

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.introInfo,
    };
  }
  render() {
    return <div className="form-heading">Intro</div>;
  }
}

export default IntroForm;
