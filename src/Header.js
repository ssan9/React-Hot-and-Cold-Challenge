import React from "react";

import Nav from "./Nav";

import "./Header.css";

export default function Header(props) {
  return (
    <div className="form-header">
      <Nav
        displayHelp={props.displayHelp}
        restartGame={props.restartGame} /*why*/
      />
      <header className="header">
        <h1>HOT or COLD</h1>
      </header>
    </div>
  );
}
