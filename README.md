# React-Clicky-Game
<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/35487884-e9a8e7f8-0435-11e8-8416-733811c11763.gif" width="425"/>
</p>

Fond memories of The Legend of Zelda? Why not pass some time, playing this Ocarina of time React Click Game. 

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/35487996-10477e1e-0437-11e8-973d-6ca5e1025de4.png" width="425"/>
</p>

## Instructions
Click on any of the character cards. They will be reshuffled and you'll have to choose another. As you keep choosing unique characters, you'll gain hearts and magic power. Choose poorly, and you'll lose your magic power and have to start again. Only when you surpass your total from the previous attempt will you begin to gain hearts again. 

Keep trying to max out your hearts and magic power. 

Live [demo](https://mysterious-reaches-59628.herokuapp.com/)

## Requirements
For this assignment, you'll create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## Code Higlights

### Using a function to render html with React
The beauty of React lies in how fast it renders to the DOM and using state to handle client side functionality without the use of jQuery. Here my heart containers are rendered as div's with their styling applied via CSS. They are looped for and added to the DOM everytime the user gains a heart.
```
renderHearts() {
		let divs = [];

		for (let i = 0; i < this.state.hearts; i++) {
			divs.push(<div key={i} className="heart"></div>);
		}

		return <div>{divs}</div>;
	};

    ...

    <div className="heartWrapper">
    				{this.renderHearts()}
    				<Line 
						className="progress-bar"
	        			percent={this.state.guessesCorrect}
	        			trailWidth="8" 
	        			strokeWidth="8" 
	        			strokeColor="#87df6f"
						strokeLinecap="square" />
    				</div>
```

## Built With
+ [React](https://reactjs.org/)
+ [rc-progress](https://www.npmjs.com/package/rc-progress)
+ [Node.js](https://nodejs.org/en/)
+ [Yarn](https://yarnpkg.com/en/)
+ [Bootstrap 4](https://getbootstrap.com/)
+ [Google Fonts](https://fonts.google.com/)

###Acknowledgements
+ The Legend of Zelda. Especially the Ocarina of Time. It was and still is one of the best games I've ever played in my life. If you're like me and want some of those old feels from the game and especially the music. Check out this cool mix while playing the game [Zeldawave](https://www.youtube.com/watch?v=bHUvykXL8Og&t=1100s)

<p align="center">
<img src="https://user-images.githubusercontent.com/29084524/35487885-eb6869b0-0435-11e8-9420-53636dd53521.gif" width="425"/>
</p>


### Authors
+ [Alex Edward Ball](https://github.com/AlexEBall)
