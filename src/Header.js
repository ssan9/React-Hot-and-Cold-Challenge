import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav';

import './header.css';

export class Header extends React.Component {
	render() {
		return (
			<Nav 
				// onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        		onRestartGame={() => props.onRestartGame()} why
      		/>
				<header>
					<h1>HOT or COLD</h1>
				</header>	
			);
	}

}