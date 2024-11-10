import React from 'react'
import Portfoliostyle from '../Portfolio/Portfolio.module.css'
import Link from 'next/link'

const portfolio = () => {
  return (
    <div className={Portfoliostyle.body}>
      <header className={Portfoliostyle.header}>
        <a href="#" className={Portfoliostyle.logo}>Dilkash.</a>

        <nav className={Portfoliostyle.navbar}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Portfolio" className={Portfoliostyle.active}>Portfolio</Link>
        </nav>
    </header>
    <section className={Portfoliostyle.portfolio}>
        <div className={Portfoliostyle['portfolio-content']}>
        <div className={Portfoliostyle.project1}>
            <h1>PROJECT 1</h1>
            <h3>STORY BOARDING WEBSITE</h3>
            <p>This platform provides children with a fun and engaging way to
               experience storytelling through visuals. Using storyboards composed of colorful, expressive pictures,
               kids can follow along and understand narratives step-by-step, making it easier for them to retell the
               story in their own words. Each story section features illustrations that capture key moments, helping
               children with vocabulary, sequencing, and memory skills. Interactive features, like simple animations
               or prompts, encourage kids to think critically about what they see and share their interpretations,
               fostering creativity and language development in an enjoyable, visual way.
            </p>
            <a href="https://dilkashmaryam.github.io/storyboarding-webiste/">Project link</a>
        </div>
        <div className={Portfoliostyle.project2}>
            <h1>PROJECT 2</h1>
            <h3>MEMORY GAME</h3>
            <p>The Memory Game is a fun, interactive challenge designed to test and improve memory skills.
                The objective is to find matching pairs of cards within a grid, with each successful match reducing
                the number of cards remaining. Built with engaging visuals, it offers various levels of difficulty 
                and keeps track of user attempts, making it both entertaining and mentally stimulating. 
                The game is ideal for players of all ages looking to enhance memory recall in a playful setting.
                The Memory Game project is an engaging, interactive game built using HTML, CSS, and JavaScript.
                In this project I've collobrated with my hardworking team. </p>
            <a href=" https://dilkashmaryam.github.io/memory-game/">Project link</a>
        </div>
        <div className={Portfoliostyle.project3}>
            <h1>PROJECT 3</h1>
            <h3>RESUME BUILDER</h3>
            <p>The Resume Builder project is a web application designed to help users create, customize, and manage 
               their resumes effortlessly. Built with dynamic features, it allows users to input their details into a
               clean, user-friendly form and generates a well-structured resume in real-time. Users can also download 
               their resume in PDF format or share a unique link for easy access and sharing. Each resume has a unique path,
               ensuring privacy and easy identification, making it a powerful tool for job seekers to showcase their skills
               in a professional format.</p>
            <a href="https://dilkashmaryam.github.io/Shareable-Link-Resume/">Project link</a>
        </div>
    </div>
    </section>
    </div>
  )
}

export default portfolio
