import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.contactInfo,
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
    this.props.updateUserData(this.state.data, "contactInfo");
  };

  render() {
    const { content, email } = this.state.data;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-heading">Contact</div>
        <div className="input-field-section">
          <label>
            Content:
            <textarea
              name="content"
              value={content}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
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

export default ContactForm;
