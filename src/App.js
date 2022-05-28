import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
    return(
        <>
            <Navbar />
            <Footer />
            <div className="projects--wrap">
                <Projects
                    img=""
                    title="Campus"
                    time="2 years and still on it!"
                    devTeam="2 people. Me as the main programmer, my colleague as designer and tester."
                    text="Sistema administrativo de Oxford College. El desarrollo empezó en 2020 como un proyecto para mantenernos ocupados durante la pandemia. En Marzo de 2021 se lanzó al público y desde entonces hubieron incontables parches y actualizaciones."
                />
                <Projects
                    img=""
                    title="Verb Browser"
                    time="2 days"
                    devTeam="Only me :D"
                    text="Conjugación de verbos en inglés con su pronunciación. No tengo ni idea cómo lo hice, pero funciona exactamente como me lo habían pedido."
                />
                <Projects
                    img=""
                    title="Juegos"
                    time="It depends"
                    devTeam="2 people. Me as the main programmer and tester, my colleague as visual designer."
                    text="Día del niño y Halloween"
                />
            </div>
        </>
    )
}

/* 

*/