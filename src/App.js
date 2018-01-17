import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from './components/Card';
import Characters from './characters.json';

let topScore = 0;
let guessesCorrect = 0;
let message = "Click a character to begin";

class App extends Component {

	state = {
		Characters,
		topScore,
		guessesCorrect,
		message
	};

	setClicked = id => {
		const Characters = this.state.Characters;
		const cardClicked = Characters.filter(Character => Character.id === id);

		if (cardClicked[0].clicked) {

			guessesCorrect = 0;
			message = 'Whoops. Start over';

			// change to map or smth?
			for (let i = 0; i < Characters.length; i++) {
				Characters[i].clicked = false;
			}

			this.setState({message});
			this.setState({guessesCorrect});
			this.setState({Characters});
		} else {
			cardClicked[0].clicked = true;

			guessesCorrect++;
			message = "Good Job!"

			if (guessesCorrect > topScore) {
				topScore = guessesCorrect;
			}

			Characters.sort((a, b) => {
				return 0.5 - Math.random()
			});

			this.setState({Characters});
			this.setState({guessesCorrect});
			this.setState({message});
		}
	};

    render() {

        return ( 
        	<Wrapper>
        		<div>
        			<h2>Click on an image to earn points, but don't click on any of them more than once!</h2>
        			<h3>{this.state.message}</h3>
        			<h3>Correct Guesses: {this.state.guessesCorrect}</h3>
        			<h3>Top Score: {this.state.topScore}</h3>
        		</div>
            	<Title>Guessing Game</Title>
            	<div className="row">
            		{this.state.Characters.map(Character => (
            			<Card 
            				setClicked={this.setClicked}
            				id={Character.id}
            				key={Character.id}
            				image={Character.image}
            			/>
            		))}
            	</div>
            </Wrapper>
        );
    }
};

export default App;