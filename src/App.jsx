import React from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import About from './components/About'
// import './App.css' // REMOVED - Tailwind handles the global reset
import Pro from './components/Pro'
import Cont from './components/Cont'

function App() {
    return (
        // The main container. We set a minimum height and the base background color.
        <div className="min-h-screen bg-[#11071F] font-sans"> 
            <Nav />
            <Body />
            <About />
            <Pro/>
            <Cont/>
        </div>
    )
}

export default App