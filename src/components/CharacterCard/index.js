import React from "react";

export default function CharacterCard(props) {
    return(
        <div onClick={props.handleClick}>
            <img src={props.image} alt={props.alt}/>
        </div>
    );
}