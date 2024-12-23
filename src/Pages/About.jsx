import React from 'react'
import Header from '../components/Header'

function About() {
  return (
  <>
  <Header/>
  <div className="about">
    <div className="about-box">
        <div className="about-me">
            <div className="about-me-left">
            <div className="about-me-icon">
            <img src="./Icon.png" alt="" />
                <h4> Freelance Web Developer</h4>
            </div>
                <h1>Hello 👋, I'm John Doe.</h1>
                <p>Greetings! I'm John Doe, a freelance web developer based in Cityville.
                     My journey into web development began with a strong educational foundation in computer science, holding a bachelor's degree from Cityville University.</p>
                     <div className="about-me-cards">
                        <div className="about-me-card">
                            <h2>12+</h2>
                            <p>Years Of Experience</p>
                        </div>
                        <div className="about-me-card">
                            <h2>80+</h2>
                            <p>Completed Projects</p>
                        </div>
                        <div className="about-me-card">
                            <h2>20+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="about-me-card">
                            <h2>10+</h2>
                            <p>Awards</p>
                        </div>
                     </div>
                </div>
            <div className="about-me-right">
                <img src="./Image.png" alt="" />
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default About