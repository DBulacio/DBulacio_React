import React from "react"

export default function Projects(props) {
    return (
        <section className="projects">
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <p>Dev team: {props.devTeam}</p>
            <p>Dev time: {props.time}</p>
            <p>{props.text}</p>
        </section>
    )
}