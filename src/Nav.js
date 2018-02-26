import React from "react";
// import './nav.css';

export default function Nav(props) {
  return (
    <nav>
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
          <a
            href="#start"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestartGame()}
          >
            +NEW GAME
          </a>
        </li>
      </ul>
    </nav>
  );
}
