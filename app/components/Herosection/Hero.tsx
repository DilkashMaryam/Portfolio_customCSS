import React from 'react'
import Herostyle from "./Hero.module.css"

const Hero = () => {
  return (
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <section className={Herostyle.home}>
        <div className={Herostyle['home-content']}>
            <h1>Hi, I'm Dilkash Maryam</h1>
            <h3>Frontend Developer</h3>
            <p>As an frontend developer, I've a keen eye for detail and a 
                love for creating engaging user experiences. I specialize in building
                responsive, user-centered websites with modern technologies.
                From clean, functional designs to dynamic interfaces, I bring ideas
                to life with code that’s optimized, accessible, and scalable. 
                Explore my projects below to see how I craft digital solutions! </p>
                <div className={Herostyle['btn-box']}>
                    <a href="#">Hire Me</a>
                    <a href="#">Let's Talk</a>
                </div>
        </div>
        <div className={Herostyle['home-sci']}>
            <a href="https://github.com/DilkashMaryam"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/dilkash-maryam/"><i className="bx bxl-linkedin"></i></a>
        </div>
        <span className={Herostyle['home-imgHover']}></span>
    </section>
    </div>
  )
}

export default Hero
