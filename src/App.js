import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
    return(
        <>
            <Navbar />
            <Footer />
            <Projects
                img=""
                title="Campus"
                text="Sistema administrativo de Oxford College"
            />
            <Projects
                img=""
                title="Verb Browser"
                text="Conjugación de verbos en inglés con su pronunciación"
            />
            <Projects
                img=""
                title="Juegos"
                text="Día del niño y Halloween"
            />
        </>
    )
}

/* 

*/