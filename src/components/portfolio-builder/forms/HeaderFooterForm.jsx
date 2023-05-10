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
        <div>
          <div className="header-data">
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
          <div className="footer-data">
            <label>
              Self Credit Content:
              <input
                type="text"
                name={`selfCreditContent`}
                value={footerData.selfCreditContent}
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
              gitRepo:
              <input
                type="text"
                name={`gitRepo`}
                value={footerData.gitRepo}
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
              creditContent:
              <input
                type="text"
                name={`creditContent`}
                value={footerData.creditContent}
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
              creditUrl:
              <input
                type="text"
                name={`creditUrl`}
                value={footerData.creditUrl}
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
              gitUrl:
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
        </div>
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
    );
  }
}

export default HeaderFooterForm;
