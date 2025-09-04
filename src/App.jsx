import React from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import About from './components/About'
import './App.css'
import Pro from './components/Pro'
import Cont from './components/Cont'
function App() {
    return (
        <div>
            <Nav />
            <Body />
            <About />
            <Pro/>
            <Cont/>
        </div>
    )
}

export default App