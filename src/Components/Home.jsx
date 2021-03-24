import React, { Component } from 'react';
import '../css/Home.css';
import gsap from "gsap"
import ScoreCount from "./ScoreCount"
class Home extends Component {
	state = {
		Data: this.props.Data,
		name: '',
		PcChoice: { Picture: require('../Pictures/Rock.png').default, Name: 'Rock' },
		UserChoice : { Picture: require('../Pictures/Rock.png').default, Name: 'Rock' },
		PC : 0,
		userScore : 0,
		comment : "labib"
	};

	handleChange = (event) => {
		this.setState({ name: event.target.value });
	};



	InitialGame = (choice) => {
		function randomChoice(arr) {
			return arr[Math.floor(arr.length * Math.random())];
		}
		const userChoice = this.state.Data.find(e => e.Name === choice)
		const PcChoice = randomChoice(this.state.Data);
		const Score = ScoreCount(PcChoice.Name , choice , this.state.PC , this.state.userScore, this.state.name)
		this.setState({ PcChoice: PcChoice , UserChoice : userChoice ,PC: Score.pc , userScore : Score.human , comment : Score.comment})
	};

	initialReset = () => {
		let Rock = { Picture: require('../Pictures/Rock.png').default, Name: 'Rock' }
		this.setState({userScore : 0 , PC : 0 , PcChoice : Rock , UserChoice : Rock, comment : "" })
	}

	HandlePlay = () => {
		if (this.state.name.trim() === "") alert("Enter name pls ")
		else {
		const game = document.querySelector(".game")
		const input = document.querySelector(".input")
		gsap.fromTo(game , 1 , {visibility : "hidden" , opacity :0} , {visibility :"visible" , opacity :1})
		gsap.fromTo(input , 1 , {opacity :1} , {opacity :0})

		}
	}


	render() {
		const { PC , userScore, comment, name , PcChoice , UserChoice} = this.state;
		return (
			<React.Fragment>
				<nav>
					<span>Play Rock-paper-scissor with me !</span>
				</nav>
				<section>
					<div className="input">

					<input autoComplete = "off" type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder = "Enter Name" />
					<button onClick = {this.HandlePlay} className = "btnPlay">Start Playing</button>
					</div>
					<gameSpan className = "game">
					<span className = "Scores">
						{name}'s Score : {userScore}
					</span>
					<span className = "PCScores">pc Score : {PC}</span><br/>
					<span className = "comment">{comment}</span><br/>
					<div className = "Play">

						<img className = "Picture" src={UserChoice.Picture} alt=""/>
						<img className = "PcChoice" src={PcChoice.Picture} alt=""/><br/>
						<button  className = " btn btn-success mt-5" onClick = {() => this.InitialGame("Rock")}>Rock</button>
						<button  className = " btn btn-danger mt-5 ml-4" onClick = {() => this.InitialGame("Paper")}>Paper</button>
						<button  className = " btn btn-secondary mt-5 ml-4" onClick = {() => this.InitialGame("Scissor")}>Scissor</button>
					</div>
					<button onClick = {this.initialReset} className="btn btn-outline-dark">Reset Game</button>
					</gameSpan>
				</section>
			</React.Fragment>
		);
	}
}

export default Home;
