import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Get in Touch</h2>
        <div className="row">
          <div className="12u">
            <form method="post" action="https://formspree.io/oppermanre17@gmail.com">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
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
                  >
                  </textarea>
                </div>
              </div>
            </form>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;