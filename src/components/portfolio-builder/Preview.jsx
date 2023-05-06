import React, { Component } from "react";
import Footer from "../footer/Footer";
import LeftPanel from "../left-panel/LeftPanel";
import AllSections from "../all-sections/AllSections";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { socialMediaLinks, userData, footerData } = this.props;
    return (
      <div className="preview">
        <AllSections {...userData} />
        {this.state.width <= 500 && <LeftPanel {...socialMediaLinks} />}
        <Footer {...footerData} />
      </div>
    );
  }
}

export default Preview;
