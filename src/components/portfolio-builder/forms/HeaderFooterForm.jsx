import React, { Component } from "react";

class HeaderFooterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: props.headerData,
      footerData: props.footerData,
    };
  }
  render() {
    return <div className="form-heading">Header and Footer</div>;
  }
}

export default HeaderFooterForm;
