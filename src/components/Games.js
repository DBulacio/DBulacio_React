import React from "react"

export default function Game(props) {
    return (
        <div className="game-card">
            <h1>{props.title}</h1>
            <img src={props.img} alt=""/>
            <p>{props.text}</p>
        </div>
    )
}