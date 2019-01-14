import React from "react";

export default function GameTracker(props) {
    return(
        <section id="gameTracker">
            <div>
                <p>Round: {props.round}</p>
            </div>
            <div>
                <p>Score: {props.score}</p>
            </div>
            <div>
                <p>Wins: {props.wins}</p>
            </div>
            <div>
                <p>Losses: {props.losses}</p>
            </div>
        </section>
    );
}