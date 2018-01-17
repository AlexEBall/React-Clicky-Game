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
		const cardClicked = Characters.fliter(Character => Character.id === id);

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
    	// console.log(Characters);
        return ( 
        	<Wrapper>
            	<Title>Guessing Game</Title>
            		{this.state.Characters.map(Character => (
            			<Card 
            				setClicked={this.setClicked}
            				id={Character.id}
            				key={Character.id}
            				image={Character.image}
            			/>
            		))}
            </Wrapper>
        );
    }
};

export default App;