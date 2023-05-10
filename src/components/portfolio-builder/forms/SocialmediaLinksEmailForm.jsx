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
          <div className="links-data">
            <label>
              githubUrl
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
              leetcodeUrl:
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
              instaUrl:
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
              twitterUrl:
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
              linkedinUrl:
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
          <div className="emails">
            {emails.map((email, idx) => {
              return (
                <div key={idx}>
                  <label>
                    emails:
                    <input
                      type="text"
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
                  </label>
                </div>
              );
            })}
            <button
              className="add-email"
              onClick={() => {
                this.setState((prevState) => {
                  return { ...prevState, emails: [...prevState.emails, ""] };
                });
              }}>
              Add Email
            </button>
            {emails.length > 1 && (
              <button
                className="remove-email"
                onClick={() =>
                  this.setState((prevState) => {
                    return {
                      ...prevState,
                      emails: prevState.emails.slice(0, -1),
                    };
                  })
                }>
                Remove Email
              </button>
            )}
          </div>
        </div>
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
    );
  }
}
export default SocialMediaLinksEmailForm;
