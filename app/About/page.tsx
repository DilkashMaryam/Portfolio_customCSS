import React from 'react'
import Aboutstyle from "../About/About.module.css"
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <header className={Aboutstyle.header}>
        <a href="#" className={Aboutstyle.logo}>Dilkash.</a>

        <nav className={Aboutstyle.navbar}>
          <Link href="/">Home</Link>
          <Link href="/About" className={Aboutstyle.active}>About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Portfolio">Portfolio</Link>
        </nav>
    </header>

      <section className={Aboutstyle.about}>
        <div className={Aboutstyle['about-content']}>
        <p>I’m a passionate frontend developer with a talent for translating creative ideas into clean,
            functional, and visually striking web experiences. With a solid foundation in HTML, CSS, and JavaScript,
            and expertise in modern libraries and frameworks like React and Next.js, I build interfaces that 
            are not only beautiful but also intuitive and responsive. I thrive on tackling complex design challenges 
            and continually learning the latest industry trends to enhance my craft. Let’s create something impactful 
            together!</p>
            <p>Alongside my technical skills, I am also a certified graphic designer with expertise in Adobe Illustrator
                and Photoshop, allowing me to bring a refined aesthetic and cohesive visual identity to every project.
                Whether it's designing clean layouts or coding interactive experiences, my aim is always to build 
                digital solutions that not only meet but exceed user expectations.</p>
        </div>
    </section>
    </div>
  )
}

export default About
