import React from "react";
import adventureTimeHeader from "../../images/adventureTimeHeader.jpg"

export default function Header() {
    return(
        <header>
            <h1>Cicky Game</h1>
            <p>Try your hand at funnest memory game you'll ever see. Start the game by clicking or tapping on a character card below.</p>
            <img src={adventureTimeHeader} alt="Adventure Time opening scene with Finn and Jake at the top of a mountain and the Adventure Time logo above them." />
        </header>
    );
}
