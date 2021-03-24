import React, { Component } from 'react';
import Home from './Components/Home';
import "./App.css";
class App extends Component {
	state = {
		Pictures: [
			{ Picture: require('./Pictures/Paper.png').default, Name: 'Paper' },
			{ Picture: require('./Pictures/Rock.png').default, Name: 'Rock' },
			{ Picture: require('./Pictures/Scissot.png').default, Name: 'Scissor' }
		]
	};

	render() {
		return (
			<React.Fragment>
				<Home Data={this.state.Pictures} />
			</React.Fragment>
		);
	}
}

export default App;
