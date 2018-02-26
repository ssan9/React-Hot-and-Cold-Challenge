import React from "react";

import Nav from "./Nav";

// import './header.css';

export default function Header(props) {
  return (
    <div>
      <Nav
        displayHelp={props.displayHelp}
        onRestartGame={() => props.onRestartGame()} /*why*/
      />
      <header>
        <h1>HOT or COLD</h1>
      </header>
    </div>
  );
}
