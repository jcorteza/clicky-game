import React from "react";
import GameTracker from "../GameTracker";
import CharacterCard from "../CharacterCard";
import characters from "../characters.json";
let thisArray = characters.adventureTime;
let resultsText;

class GameDisplay extends React.Component{
    constructor(props) {
    super(props);
        this.state = {
            wins: 0,
            losses: 0,
            round: 0,
            score: 0,
            name: "",
            clickedArray: [],
            arrayInUse: thisArray,
            resultAlertStyle: {display: "none"}
        }
        this.handleClick = this.handleClick.bind(this);
        this.result = this.result.bind(this);
    }

    result = function(win) {
        if(win) {
            resultsText = "Slam-bam-in-a-can! You're a winner!"
        } else {
            resultsText = "Dude, what the bjork? Try again next time."
        }
        this.setState({resultAlertStyle: null});
        setTimeout(() => {
            this.setState({resultAlertStyle: {display: "none"}});
        }, 3000);
    }
    
    handleClick = (e) => {
        e.preventDefault();
        const newName = e.target.name;
        let stateUpdate;
        this.setState(
            {
                arrayInUse: thisArray.sort((a,b) => 0.5 - Math.random()),
                name: newName
            }
        );
        if(this.state.clickedArray.includes(e.target.name)) {
            stateUpdate =  {
                round: this.state.round + 1,
                losses: this.state.round + 1,
                score: 0,
                clickedArray: []
            }
            this.result(false);
        } else {
            this.setState((prevState) => ({
                clickedArray: [...prevState.clickedArray, prevState.name]
            }));
            stateUpdate =  {
                score: this.state.score + 1
            }
            if([...this.state.clickedArray, e.target.name].length === this.state.arrayInUse.length) {
                stateUpdate = {
                    round: this.state.round + 1,
                    wins: this.state.wins + 1,
                    clickedArray: [],
                    score: 0
                }
                this.result(true);
            }
        }
        this.setState(stateUpdate);
    }

    render(){
        return(
            <main>
                <GameTracker round={this.state.round} score={this.state.score} losses={this.state.losses} wins={this.state.wins}/>
                <p className="resultAlert" style={this.state.resultAlertStyle}>{resultsText}</p>
                <section id="characterCards">
                    {this.state.arrayInUse.map((character) => { 
                        return (<CharacterCard
                            image={require(`../../images/${character.image}`)} 
                            alt={character.alt} 
                            name={character.name} 
                            key={character.key}
                            handleClick={this.handleClick} 
                        />);
                    })};
                </section>
            </main>
        );
    }
}

export default GameDisplay;