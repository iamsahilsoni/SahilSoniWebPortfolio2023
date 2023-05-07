import React, { Component } from "react";

class AboutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.aboutInfo,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  };

  handleSkillsListChange = (index, event) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const skillsList = [...prevState.data.skillsList];
      skillsList[index] = value;
      return {
        data: {
          ...prevState.data,
          skillsList,
        },
      };
    });
  };

  handleAddSkill = () => {
    this.setState((prevState) => {
      const skillsList = [...prevState.data.skillsList, ""];
      return {
        data: {
          ...prevState.data,
          skillsList,
        },
      };
    });
  };

  handleRemoveSkill = (index) => {
    this.setState((prevState) => {
      const skillsList = [...prevState.data.skillsList];
      skillsList.splice(index, 1);
      return {
        data: {
          ...prevState.data,
          skillsList,
        },
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserData(this.state.data, "aboutInfo");
  };

  render() {
    const { firstPara, secondPara, displayPic, skillsList } = this.state.data;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-heading">About</div>
        <label>
          First Paragraph:
          <textarea
            name="firstPara"
            value={firstPara}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Second Paragraph:
          <textarea
            name="secondPara"
            value={secondPara}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Display Pic:
          <input
            type="text"
            name="displayPic"
            value={displayPic}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Skills List:
          {skillsList.map((skill, index) => (
            <div key={index}>
              <input
                type="text"
                value={skill}
                onChange={(event) => this.handleSkillsListChange(index, event)}
              />
              <button
                type="button"
                onClick={() => this.handleRemoveSkill(index)}>
                Remove Skill
              </button>
            </div>
          ))}
          <button type="button" onClick={this.handleAddSkill}>
            Add Skill
          </button>
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default AboutForm;
