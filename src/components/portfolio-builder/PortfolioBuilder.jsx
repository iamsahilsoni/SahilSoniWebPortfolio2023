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

class PortfolioBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
      openPreview: false,
      appData: AppData,
      isCurrFormSaved: false,
    };
  }

  forms = [
    <Instructions />,
    <IntroForm />,
    <AboutForm />,
    <ExperienceForm />,
    <ProjectForm />,
    <ContactForm />,
    <HeaderFooterForm />,
    <SocialmediaLinksEmailForm />,
  ];

  updateUserData = (newData, propName) => {
    this.setState((prevState) => {
      const updatedObj = {
        ...prevState,
        appData: {
          ...prevState.appData,
          userData: {
            ...prevState.appData.userData,
            [propName]: newData,
          },
        },
        isCurrFormSaved: true,
      };
      return updatedObj;
    });
  };

  updateHeaderFooterData = (newData) => {
    this.setState((prevState) => {
      const updatedObj = {
        ...prevState,
        appData: {
          ...prevState.appData,
          headerData: newData.headerData,
          footerData: newData.footerData,
        },
        isCurrFormSaved: true,
      };
      return updatedObj;
    });
  };

  updateLinksEmailsData = (newData) => {
    this.setState((prevState) => {
      const updatedObj = {
        ...prevState,
        appData: {
          ...prevState.appData,
          socialMediaLinks: newData.socialMediaLinks,
          emails: newData.emails,
        },
        isCurrFormSaved: true,
      };
      return updatedObj;
    });
  };

  // HOC this gets a component and return a same component with added props,
  // Need it, as i have array of components and adding props later on
  SelectedFormComponentWithProps = (Component, props) => {
    if (!Component) return null;
    const WrappedComponent = () => <Component {...props} />;
    return <WrappedComponent />;
  };

  renderSectionContent() {
    const { activeSection } = this.state;
    if (activeSection >= this.forms.length || activeSection < 0) return null;

    const selectedForm = this.forms[activeSection];
    return this.SelectedFormComponentWithProps(
      selectedForm.type,
      activeSection && activeSection <= 5
        ? {
            updateUserData: this.updateUserData,
            userData: this.state.appData.userData,
          }
        : activeSection === 6
        ? {
            updateHeaderFooterData: this.updateHeaderFooterData,
            headerData: this.state.appData.headerData,
            footerData: this.state.appData.footerData,
          }
        : activeSection === 7
        ? {
            updateLinksEmailsData: this.updateLinksEmailsData,
            socialMediaLinks: this.state.appData.socialMediaLinks,
            emails: this.state.appData.emails,
          }
        : {}
    );
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
          <button
            onClick={() => this.togglePreview()}
            disabled={
              this.state.activeSection === 0 || !this.state.isCurrFormSaved
            }>
            Preview
          </button>
          {this.state.activeSection + 1 === this.forms.length && (
            <button
              className="generate-json"
              disabled={!this.state.isCurrFormSaved}
              onClick={() => {
                const json = JSON.stringify(this.state.appData);
                const blob = new Blob([json], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.download = "data.json";
                a.href = url;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}>
              Generate JSON
            </button>
          )}
          <button
            onClick={() => {
              this.state.isCurrFormSaved = false;
              this.handleButtonClick(this.state.activeSection + 1);
            }}
            disabled={
              this.state.activeSection !== 0 &&
              (this.state.activeSection + 1 >= this.forms.length ||
                !this.state.isCurrFormSaved)
            }>
            Next
          </button>
        </div>
        <div
          style={
            this.state.activeSection === 0 || this.state.isCurrFormSaved
              ? { display: "none" }
              : {
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                  backgroundColor: "antiquewhite",
                  color: "#ff0e0e",
                  padding: "5px 2px",
                }
          }>
          <p style={{ margin: 0 }}>
            Please save the current form before previewing or proceeding to the
            next form.
          </p>
        </div>
        <div className="form-section">{this.renderSectionContent()}</div>

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
