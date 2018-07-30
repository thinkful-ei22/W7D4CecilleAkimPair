import React from "react";

import TopNav from "./top-nav.js";

import "./header.css";

export default function Header(props) {
  return (
    <header>
      <TopNav toggleTutorial={props.toggleTutorial} reset={props.reset} />
      <h1>HOT or COLD</h1>
    </header>
  );
}
