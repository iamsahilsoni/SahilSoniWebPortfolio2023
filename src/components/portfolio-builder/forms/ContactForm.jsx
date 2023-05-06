import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.userData.contactInfo,
    };
  }
  render() {
    return <div className="form-heading">Contact</div>;
  }
}

export default ContactForm;
