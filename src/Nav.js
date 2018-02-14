import './nav.css';
export class Nav extends React.Component {
	render() {
		return (
			<nav>
				<ul className="navigation">
					<li>
						<a href="#what" className="what" aria-label="How to play">
							WHAT?
						</a>
					</li>
					<li>
						<a href="#start" className="new" aria-label="Start a new game"
							onClick={() => props.onRestartGame()}>
							+NEW GAME
						</a>
					</li>
					
				</ul>
			</nav>

		)
	}
}				