import React from "react"

export default function Projects(props) {
    return (
        <section>
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </section>
    )
}