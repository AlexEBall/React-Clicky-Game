import React, { Component } from "react";
import { Line } from 'rc-progress';
import Wrapper from "./components/Wrapper";
import Card from './components/Player';
import Characters from './characters.json';
import './App.css';


let topScore = 0;
let guessesCorrect = 0;
let hearts = 0;
let message = "Click a character to begin";

class App extends Component {

	state = {
		Characters,
		topScore,
		guessesCorrect,
		message, 
		hearts
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

			guessesCorrect = guessesCorrect + 2;
			message = "Good Job!"

			if (guessesCorrect > topScore) {
				topScore = guessesCorrect;
				hearts++;
				this.setState({hearts});
				this.setState({topScore});
				this.renderHearts();
			}

			Characters.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({Characters});
			this.setState({guessesCorrect});
			this.setState({message});
		}
	};

	renderHearts() {
		let divs = [];

		for (let i = 0; i < this.state.hearts; i++) {
			divs.push(<div key={i} className="heart"></div>);
		}

		return <div>{divs}</div>;
	};

    render() {

        return ( 
        	<Wrapper>
    			<div className="hero">
    				<div className="heroText">
    					<h1 className="banner">The Legend of Zelda Click Game</h1>
        				<h3 className="rules">Click on an image to earn points, but don't click on any of them more than once!</h3>
        				<h3 className="message">{this.state.message}</h3>
    				</div>
    				<div className="buttonWrapper">
    					<img src="images/buttons.png" alt="zelda buttons" />
    				</div>
					<div className="heartWrapper">
    				{this.renderHearts()}
    				<Line 
	        			percent={this.state.guessesCorrect}
	        			trailWidth="4" 
	        			strokeWidth="4" 
	        			strokeColor="#87df6f" />
    				</div>
    			</div>
            	<div className="row">
            		{this.state.Characters.map(Character => (
            			<Player
            				setClicked={this.setClicked}
            				id={Character.id}
            				key={Character.id}
            				image={Character.image}
            				name={Character.name}
            				className="col-sm-1"
            			/>
            		))}
            	</div>
            </Wrapper>
        );
    }
};

export default App;