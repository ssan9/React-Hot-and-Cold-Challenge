import React from "react";
import './Nav.css';

export default function Nav(props) {
  return (
    <nav className="nav">
      <ul className="navigation">
        <li>
          <button
            onClick={e => props.displayHelp(true)}
            className="what"
            aria-label="How to play"
          >
            WHAT?
          </button>
        </li>
        <li>
          <button
            href="#start"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.restartGame()}
          >
            +NEW GAME
          </button>
        </li>
      </ul>
    </nav>
  );
}
