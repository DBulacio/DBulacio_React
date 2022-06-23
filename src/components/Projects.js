import React from "react"

export default function Projects(props) {
    return (
        <section className="projects">
            <img className="projects--img" src={props.img} alt=""/>
            <h1 className="projects--title">{props.title}</h1>
            <p>Repo: {props.repo ? <a href={props.repo}>here</a> : <a>Private! Sorry</a>}</p>
            <p>Technology: {props.tech}</p>
            <p>Brief Description: {props.description}</p>
            <a href="">Extra...</a>
        </section>
    )
}