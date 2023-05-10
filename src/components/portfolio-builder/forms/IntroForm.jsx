import React, { Component } from "react";
class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.introInfo,
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserData(this.state.data, "introInfo");
  };

  render() {
    const { name, status, displayPic, summary } = this.state.data;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-heading">Intro</div>
        <div className="input-field-section">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={status}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Display Picture:
            <input
              type="text"
              name="displayPic"
              value={displayPic}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Summary:
            <textarea
              name="summary"
              value={summary}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-save-button">
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default IntroForm;
