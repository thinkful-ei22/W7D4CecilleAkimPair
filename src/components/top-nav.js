import React from "react";

import "./top-nav.css";

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#" onClick={this.props.toggleTutorial}>
              What?
            </a>
          </li>
          <li>
            <a className="new" href="#" onClick={this.props.reset}>
              + New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
