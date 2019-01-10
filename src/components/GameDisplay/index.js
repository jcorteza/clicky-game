import React from "react";
import GameTracker from "../GameTracker";
import CharacterCard from "../CharacterCard";
import characters from "../characters.json";
let thisArray = characters.adventureTime;

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
            arrayInUse: thisArray
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        e.preventDefault();
        let stateUpdate;
        console.log(e.target.name);
        this.setState(
            {
                arrayInUse: thisArray.sort(() => 0.5 * Math.random()),
                name: e.target.name
            }
        );
        if(this.state.clickedArray.includes(e.target.name)) {
            stateUpdate =  {
                round: this.state.round + 1,
                losses: this.state.round + 1
            }
            this.setState({
                clickedArray: [],
                score: 0
            });
        } else {
            this.setState((prevState) => ({
                clickedArray: [...prevState.clickedArray, prevState.name]
            }));
            stateUpdate =  {
                score: this.state.score + 1
            }
            if(this.state.clickedArray.length === this.state.arrayInUse.length) {
                stateUpdate = {
                    score: this.state.score + 1,
                    round: this.state.round + 1,
                    wins: this.state.wins + 1
                }
                this.setState({
                    clickedArray: [],
                    score: 0
                });
            }
        }
        this.setState(stateUpdate);
    }

    render(){
        return(
            <main>
                <GameTracker round={this.state.round} score={this.state.score} losses={this.state.losses} wins={this.state.wins}/>
                <section id="characterCards">
                    {this.state.arrayInUse.map((character) => 
                        <CharacterCard
                            image={require(`../../images/${character.image}`)} 
                            alt={character.alt} 
                            name={character.name} 
                            key={character.key}
                            handleClick={this.handleClick} 
                        />
                    )};
                </section>
            </main>
        );
    }
}

export default GameDisplay;