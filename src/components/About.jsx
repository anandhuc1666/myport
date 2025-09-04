import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <h1>My self</h1>
            <div className="about-box">
                <p>I'm a passionate
                    Front-End Developer with a Bachelor's degree in Computer Applications (BCA). I enjoy building clean,
                    responsive, and user-friendly websites using modern web technologies.
                    During my learning journey, I have completed several projects that helped me strengthen my skills in
                    <span>HTML, CSS, JavaScript, </span>and frameworks like React. I'm always eager to learn new technologies and
                    improve my development skills.
                    I'm currently looking for exciting opportunities to contribute to real-world projects and grow as a developer.
                    Let's build something amazing together!</p>
            </div>
            <div className="project-text">
                <h1 children='project-text'>Project Works</h1>
            </div>
        </div>
    )
}

export default About