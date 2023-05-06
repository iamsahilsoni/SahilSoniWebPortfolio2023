import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.experiences,
    };
  }
  render() {
    return <div className="form-heading">Experience</div>;
  }
}

export default ExperienceForm;
