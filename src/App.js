import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

// img
import campusImg from "./img/campus.png"
import verbBrowserImg from "./img/verbBrowser.png"
import gameImg from "./img/game.jpg"

export default function App() {
    return(
        <>
            <Navbar />
            <Footer />
            <div className="projects--wrap">
                <Projects
                    img={campusImg}
                    title="Campus"
                    tech="PHP - MySQL - HTML - CSS - A bit of JavaScript"
                    description="Administrative tool for Oxford College English Institute."
                />
                <Projects
                    img={gameImg}
                    title="Games"
                    tech="C# (Unity) - Contruct"
                    description="This are some of the games we made for Halloween and Children's Day at the institute."
                />
                <Projects
                    img={verbBrowserImg}
                    title="Web Browser App"
                    repo="https://www.github.com"
                    devTeam="Only me :D"
                    text="Verb Browser con la conjugación y pronunciación de varios verbos."
                />
                {/*
                <Projects
                    img={verbBrowserImg}
                    title="Landing Page para West Service Group"
                    devTeam="Only me :D"
                    text="Verb Browser con la conjugación y pronunciación de varios verbos."
                />
                <Projects
                    img={verbBrowserImg}
                    title="Landing Page para Preventive Solutions Miami"
                    devTeam="Only me :D"
                    text="Verb Browser con la conjugación y pronunciación de varios verbos."
                /> 
                */}
            </div>
        </>
    )
}

/* 

*/