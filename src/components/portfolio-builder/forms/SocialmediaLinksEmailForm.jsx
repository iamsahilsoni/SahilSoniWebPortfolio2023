import React, { Component } from "react";

class SocialMediaLinksEmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.socialMediaLinks,
    };
  }
  render() {
    return <div className="form-heading">Links</div>;
  }
}
export default SocialMediaLinksEmailForm;
