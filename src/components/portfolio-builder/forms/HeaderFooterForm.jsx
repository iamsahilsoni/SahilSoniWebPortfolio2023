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
    const { headerData } = this.state;
    const { footerData } = this.state;
    return (
      <div>
        <div className="form-heading">Header and Footer</div>
        <div className="header-data input-field-section">
          <label>
            Resume Source:
            <input
              type="text"
              name={`resumeSrc`}
              value={headerData.resumeSrc}
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  headerData: {
                    ...prevState.headerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
          <label>
            Logo Source:
            <input
              type="text"
              name={`logoSrc`}
              value={headerData.logoSrc}
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  headerData: {
                    ...prevState.headerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
        </div>
        <div className="footer-data input-field-section">
          <label>
            Self Credit Content:
            <input
              type="text"
              name={`selfCreditContent`}
              value={footerData.selfCreditContent}
              placeholder="Revised By <your-name>"
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  footerData: {
                    ...prevState.footerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
          <label>
            GitHub Repository:
            <input
              type="text"
              name={`gitRepo`}
              value={footerData.gitRepo}
              placeholder="< username >/< reponame >"
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  footerData: {
                    ...prevState.footerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
          <label>
            Credit Content:
            <input
              type="text"
              name={`creditContent`}
              value={footerData.creditContent}
              placeholder="Designed and Built By Sahil Soni"
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  footerData: {
                    ...prevState.footerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
          <label>
            Credit Url:
            <input
              type="text"
              name={`creditUrl`}
              value={footerData.creditUrl}
              placeholder="https://sahilsoni.me"
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  footerData: {
                    ...prevState.footerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
          <label>
            Git Url:
            <input
              type="text"
              name={`gitUrl`}
              value={footerData.gitUrl}
              onChange={(event) => {
                const { name, value } = event.target;
                this.setState((prevState) => ({
                  ...prevState,
                  footerData: {
                    ...prevState.footerData,
                    [name]: value,
                  },
                }));
              }}
            />
          </label>
        </div>
        <div className="form-save-button">
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.props.updateHeaderFooterData({
                headerData: this.state.headerData,
                footerData: this.state.footerData,
              });
            }}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderFooterForm;
