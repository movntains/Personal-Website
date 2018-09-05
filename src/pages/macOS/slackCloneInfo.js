import React, { Component } from 'react';

class SlackCloneInfo extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Slack Clone</h2>
        <a
          className="button"
          href="https://github.com/movntains/Slack-Clone"
          target="_blank"
        >
          View Code
        </a>
        <div className="container">
          <h2 className="secondary-title">Background</h2>
          <p>
            This project is a clone of the popular Slack application. It's written entirely in Swift, and utilizes the model-view-controller (MVC) architectural pattern. It contains a custom color theme and custom modals.
          </p>
        </div>

        <div className="container">
          <h2 className="secondary-title">Tech Stack</h2>
          <p>
            This project uses the following technologies:
          </p>
          <ul>
            <li>CocoaPods</li>
            <li>Socket.IO</li>
            <li>Alamofire</li>
            <li>SwiftyJSON</li>
            <li>Stack views</li>
            <li>Table views</li>
            <li>XIBs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SlackCloneInfo;