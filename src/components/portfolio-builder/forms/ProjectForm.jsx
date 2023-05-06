import React, { Component } from "react";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.projectWork,
    };
  }
  render() {
    return <div className="form-heading">Project</div>;
  }
}

export default ProjectForm;
