import React from "react"

export default function Projects(props) {
    return (
        <section className="projects">
            <img className="projects--img" src={props.img} alt=""/>
            <h1 className="projects--title">{props.title}</h1>
            <p>Dev team: {props.devTeam}</p>
            <p>Dev time: {props.time}</p>
            <p>{props.text}</p>
        </section>
    )
}