import React, { Component } from "react";

class AboutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.aboutInfo,
    };
  }
  render() {
    return <div className="form-heading">About</div>;
  }
}

export default AboutForm;
