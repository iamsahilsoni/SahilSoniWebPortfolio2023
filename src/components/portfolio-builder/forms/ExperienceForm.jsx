import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.experiences,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="form-heading">Experience</div>
        {data.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                name={`company`}
                value={exp.company}
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
              Position:
              <input
                type="text"
                name={`position`}
                value={exp.position}
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
              Duration:
              <input
                type="text"
                name={`duration`}
                value={exp.duration}
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
            {/* <label>
              Description:
              {exp.description.map((description, descIndex) => (
                <input
                  key={descIndex}
                  type="text"
                  name={`description[${descIndex}]`}
                  value={description}
                  onChange={(event) => {
                    const { name, value } = event.target;
                    this.setState((prevState) => ({
                      data: prevState.data.map((exp, i) =>
                        i === index
                          ? {
                              ...exp,
                              description: exp.description.map((d, j) =>
                                j === descIndex ? value : d
                              ),
                            }
                          : exp
                      ),
                    }));
                  }}
                />
              ))}
            </label> */}
            <label>
              Description:
              {exp.description.map((description, descIndex) => (
                <div key={descIndex}>
                  <input
                    type="text"
                    name={`description[${descIndex}]`}
                    value={description}
                    onChange={(event) => {
                      const { value } = event.target;
                      this.setState((prevState) => ({
                        data: prevState.data.map((exp, i) =>
                          i === index
                            ? {
                                ...exp,
                                description: exp.description.map((d, j) =>
                                  j === descIndex ? value : d
                                ),
                              }
                            : exp
                        ),
                      }));
                    }}
                  />
                  {descIndex === exp.description.length - 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => ({
                          data: prevState.data.map((exp, i) =>
                            i === index
                              ? {
                                  ...exp,
                                  description: [...exp.description, ""],
                                }
                              : exp
                          ),
                        }));
                      }}>
                      Add Description
                    </button>
                  )}
                  {descIndex !== 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => ({
                          data: prevState.data.map((exp, i) =>
                            i === index
                              ? {
                                  ...exp,
                                  description: [
                                    ...exp.description.slice(0, descIndex),
                                    ...exp.description.slice(descIndex + 1),
                                  ],
                                }
                              : exp
                          ),
                        }));
                      }}>
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            this.setState((prevState) => ({
              data: [
                ...prevState.data,
                {
                  company: "",
                  position: "",
                  duration: "",
                  description: [""],
                },
              ],
            }));
          }}>
          Add Experience
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState((prevState) => ({
              data: prevState.data.slice(0, -1),
            }));
          }}>
          Remove Experience
        </button>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            this.props.updateUserData(this.state.data, "experiences");
          }}>
          Save
        </button>
      </div>
    );
  }
}

export default ExperienceForm;
