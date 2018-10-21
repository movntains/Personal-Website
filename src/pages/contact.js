import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Get in Touch</h2>
        <div className="row">
          <div className="12u">
            <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input type="text" name="bot-field" />
              </div>
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    required
                  />
                </div>
                <div className="submit-btn">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
