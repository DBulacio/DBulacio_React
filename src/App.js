import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function App() {
    return(
        <>
            <Navbar />
            <Projects
                img=""
                title="Campus"
                paragraph="Sistema administrativo de Oxford College"
            />
            <Projects
                img=""
                title="Verb Browser"
                paragraph="Conjugación de verbos en inglés con su pronunciación"
            />
            <Projects
                img=""
                title="Juegos"
                paragraph="Día del niño y Halloween"
            />
        </>
    )
}