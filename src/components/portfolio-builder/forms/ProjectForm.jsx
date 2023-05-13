import React, { Component } from "react";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.projectWork,
    };
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="form-heading">Project</div>
        {data.map((exp, index) => (
          <div className="input-field-section" key={index}>
            <label>
              Project Heading:
              <input
                type="text"
                name={`project_heading`}
                value={exp.project_heading}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    data: prevState.data.map((exp, i) =>
                      i === index ? { ...exp, [name]: value } : exp
                    ),
                  }));
                }}
              />
            </label>
            <label>
              Project Description:
              <textarea
                type="text"
                name={`project_desc`}
                value={exp.project_desc}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    data: prevState.data.map((exp, i) =>
                      i === index ? { ...exp, [name]: value } : exp
                    ),
                  }));
                }}
              />
            </label>
            <label>
              Image source:
              <input
                type="text"
                name={`imgSrc`}
                value={exp.imgSrc}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    data: prevState.data.map((exp, i) =>
                      i === index ? { ...exp, [name]: value } : exp
                    ),
                  }));
                }}
              />
            </label>
            <label>
              Git Url:
              <input
                type="text"
                name={`gitUrl`}
                value={exp.gitUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    data: prevState.data.map((exp, i) =>
                      i === index ? { ...exp, [name]: value } : exp
                    ),
                  }));
                }}
              />
            </label>
            <label>
              External Url:
              <input
                type="text"
                name={`extUrl`}
                value={exp.extUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    data: prevState.data.map((exp, i) =>
                      i === index ? { ...exp, [name]: value } : exp
                    ),
                  }));
                }}
              />
            </label>
          </div>
        ))}
        {this.state.data.length !== 1 && (
          <div className="add-sub-section">
            <button
              type="button"
              onClick={() => {
                this.setState((prevState) => ({
                  data: prevState.data.slice(0, -1),
                }));
              }}>
              Remove Last Project
            </button>
          </div>
        )}
        <div className="form-save-button">
          <button
            type="button"
            onClick={() => {
              this.setState((prevState) => ({
                data: [
                  ...prevState.data,
                  {
                    project_heading: "",
                    imgSrc: "./assets/",
                    project_desc: "",
                    gitUrl: "https://",
                    extUrl: "https://",
                  },
                ],
              }));
            }}>
            Add Another Project
          </button>
        </div>

        <div className="form-save-button">
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.props.updateUserData(this.state.data, "projectWork");
            }}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
