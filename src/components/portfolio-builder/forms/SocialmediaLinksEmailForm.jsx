import React, { Component } from "react";

class SocialMediaLinksEmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialMediaLinks: props.socialMediaLinks,
      emails: props.emails,
    };
  }
  render() {
    const { socialMediaLinks } = this.state;
    const { emails } = this.state;
    return (
      <div>
        <div className="form-heading">Links and Emails</div>
        <div>
          <div className="links-data input-field-section">
            <label>
              GitHub Url
              <input
                type="text"
                name={`githubUrl`}
                value={socialMediaLinks.githubUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    ...prevState,
                    socialMediaLinks: {
                      ...prevState.socialMediaLinks,
                      [name]: value,
                    },
                  }));
                }}
              />
            </label>
            <label>
              Leetcode Url:
              <input
                type="text"
                name={`leetcodeUrl`}
                value={socialMediaLinks.leetcodeUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    ...prevState,
                    socialMediaLinks: {
                      ...prevState.socialMediaLinks,
                      [name]: value,
                    },
                  }));
                }}
              />
            </label>
            <label>
              Instagram Url:
              <input
                type="text"
                name={`instaUrl`}
                value={socialMediaLinks.instaUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    ...prevState,
                    socialMediaLinks: {
                      ...prevState.socialMediaLinks,
                      [name]: value,
                    },
                  }));
                }}
              />
            </label>
            <label>
              Twitter Url:
              <input
                type="text"
                name={`twitterUrl`}
                value={socialMediaLinks.twitterUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    ...prevState,
                    socialMediaLinks: {
                      ...prevState.socialMediaLinks,
                      [name]: value,
                    },
                  }));
                }}
              />
            </label>
            <label>
              Linkedin Url:
              <input
                type="text"
                name={`linkedinUrl`}
                value={socialMediaLinks.linkedinUrl}
                onChange={(event) => {
                  const { name, value } = event.target;
                  this.setState((prevState) => ({
                    ...prevState,
                    socialMediaLinks: {
                      ...prevState.socialMediaLinks,
                      [name]: value,
                    },
                  }));
                }}
              />
            </label>
          </div>
          <div className="emails input-field-section">
            <label>
              Email:
              {emails.map((email, idx) => {
                return (
                  <div key={idx}>
                    <input
                      type="email"
                      name={`email`}
                      value={email}
                      onChange={(event) => {
                        const { value } = event.target;
                        this.setState((prevState) => ({
                          ...prevState,
                          emails: emails.map((email, currIdx) => {
                            return idx === currIdx ? value : email;
                          }),
                        }));
                      }}
                    />
                  </div>
                );
              })}
              {emails.length > 1 && (
                <div>
                  <button
                    className="remove-email"
                    style={{ margin: "3px" }}
                    onClick={() =>
                      this.setState((prevState) => {
                        return {
                          ...prevState,
                          emails: prevState.emails.slice(0, -1),
                        };
                      })
                    }>
                    Remove Last Email
                  </button>
                </div>
              )}
            </label>

            <div className="add-sub-section">
              <button
                className="add-email"
                onClick={() => {
                  this.setState((prevState) => {
                    return { ...prevState, emails: [...prevState.emails, ""] };
                  });
                }}>
                Add Another Email
              </button>
            </div>
          </div>
        </div>
        <div className="form-save-button">
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.props.updateLinksEmailsData({
                socialMediaLinks: this.state.socialMediaLinks,
                emails: this.state.emails,
              });
            }}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default SocialMediaLinksEmailForm;
