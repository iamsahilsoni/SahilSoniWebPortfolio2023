import React, { Component } from "react";
import Modal from "react-modal";
import { Preview, Instructions } from "./";
import {
  AboutForm,
  ContactForm,
  ExperienceForm,
  HeaderFooterForm,
  IntroForm,
  ProjectForm,
  SocialmediaLinksEmailForm,
} from "./forms";
import "./PortfolioBuilder.css";
import AppData from "./emptyData";

const forms = [
  <Instructions />,
  <IntroForm />,
  <AboutForm />,
  <ExperienceForm />,
  <ProjectForm />,
  <ContactForm />,
  <HeaderFooterForm />,
  <SocialmediaLinksEmailForm />,
];

const previewModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 100,
  },
  content: {
    top: "50px",
    overflow: "auto",
    padding: 0,
    zIndex: 100,
  },
};

Modal.setAppElement("#root");

// HOC this gets a component and return a same component with added props,
// Need it, as i have array of components and adding props later on
const SelectedFormComponentWithProps = (Component, props) => {
  if (!Component) return null;
  const WrappedComponent = () => <Component {...props} />;
  return <WrappedComponent />;
};

class PortfolioBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
      openPreview: false,
      appData: AppData,
    };
  }

  renderSectionContent() {
    const { activeSection } = this.state;
    if (activeSection >= forms.length || activeSection < 0) return null;
    return forms[activeSection].type;
  }

  handleButtonClick(idx) {
    this.setState({ ...this.state, activeSection: idx });
  }

  togglePreview() {
    this.setState({ ...this.state, openPreview: !this.state.openPreview });
  }
  render() {
    return (
      <div className="portfolioBuilder">
        <div className="switch-btn">
          <button
            onClick={() => this.handleButtonClick(this.state.activeSection - 1)}
            disabled={this.state.activeSection === 0}>
            Previous
          </button>
          <button onClick={() => this.togglePreview()}>Preview</button>
          {this.state.activeSection + 1 === forms.length && (
            <button
              className="generate-json"
              onClick={() => console.log("Generating JSON")}
              disabled={this.state.activeSection + 1 !== forms.length}>
              Generate JSON
            </button>
          )}
          <button
            onClick={() => this.handleButtonClick(this.state.activeSection + 1)}
            disabled={this.state.activeSection + 1 >= forms.length}>
            Next
          </button>
        </div>
        <div className="form-section">
          {SelectedFormComponentWithProps(
            this.renderSectionContent(),
            this.state.appData
          )}
        </div>

        <Modal
          isOpen={this.state.openPreview}
          onRequestClose={() => this.togglePreview()}
          style={previewModalStyles}>
          <div style={{ pointerEvents: "none" }}>
            <Preview {...this.state.appData} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default PortfolioBuilder;
