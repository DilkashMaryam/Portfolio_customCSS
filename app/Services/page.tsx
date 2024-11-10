import React from 'react'
import Servicestyle from "../Services/Services.module.css"
import Link from 'next/link'

const Services = () => {
  return (
    <div>
         <header className={Servicestyle.header}>
        <a href="#" className={Servicestyle.logo}>Dilkash.</a>

        <nav className={Servicestyle.navbar}>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="?Services" className={Servicestyle.active}>Services</Link>
          <Link href="/Portfolio">Portfolio</Link>
        </nav>
    </header>
    <section className={Servicestyle.services}>
        <div className={Servicestyle['services-content']}>
            <div className={Servicestyle.web}>
                <h1>WEB DEVELOPMENT</h1>
                <p>We build responsive, user-friendly websites and web applications that provide seamless experiences
                    on any device. Our expertise includes JavaScript frameworks, HTML, CSS, and more, ensuring
                    cutting-edge designs and optimal performance.</p>
            </div>
            <div className={Servicestyle.graphic}>
                <h1>GRAPHIC DESIGNING</h1>
                <p>From logos to complete branding solutions, our graphic design services bring your ideas to life.
                    We specialize in Adobe Illustrator and Photoshop, crafting designs that visually communicate
                    and captivate audiences.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
