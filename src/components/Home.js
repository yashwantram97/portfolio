import React from "react";
import './style.css'
import Timeline from "./Timeline";
import ProjectsAndSkills from "./ProjectsAndSkills";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillYoutube} from 'react-icons/ai'

export default function Home(){
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
    <div id="home-tag">
        <header className="container my-5">
            <div className="navbar-head">
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className="navbar navbar-brand">Yashwant Ram</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toogle"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar">
                    <Nav className="me-auto" className="navbar" variant="pills">
                        <Nav.Link href="#home-tag" className="navbar navbar-link">Home</Nav.Link>
                        <Nav.Link href="#about-tag" className="navbar navbar-link">About</Nav.Link>
                        <Nav.Link href="#career-tag" className="navbar navbar-link">Career</Nav.Link>
                        <Nav.Link href="#skill-tag" className="navbar navbar-link">Skills</Nav.Link>
                        <Nav.Link href="#social-media-tag" className="navbar navbar-link">Social</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </header>

        <div className="container home">

            <div className="row my-5 margin">
                <div className="col-lg-6 order-md-last text-center">
                        <img src={require('/home/yash/Documents/portfolio/portfolio/src/images/profile.jpg')} className="img-resp" />
                </div>

                <div className="col-lg-6 d-flex align-items-center mt-5">
                    <h2 className="brief">
                        Software Engineer, AI enthusiast and ever lasting learner
                    </h2>
                </div>
            </div>


            <div className="row my-5 margin">
                <div className="col-lg-3">
                    <h3 className="heighlight my-3">Currently</h3>
                    <p>Full Stack Developer</p>
                </div>
                <div className="col-lg-3">
                    <h3 className="heighlight my-3">Learning About</h3>
                    <p>Full Stack Developer</p>                    
                </div>
                <div className="col-lg-3" id="about-tag">
                    <h3 className="heighlight my-3">On The Side</h3>
                    <p>Dance and Books</p>                                        
                </div>
            </div>

            <div className='container text-center'>
                <h1 className='timeline-heading-about underline-dark'>About</h1>
            </div>

            <div className="container p-3 margin margin-shadow border">
                <h2 className="about">
                    "Hi, I am Yashwant Ram, a software developer, 
                    I love developing end to end software systems 
                    majorly web. I am also super intrested in AI and 
                    currently exploring various algorithms and 
                    it can be used in software to improve experience." 
                </h2>
            </div>


        </div>
        <div id="career-tag">
            <Timeline/>
        </div>
        <div>
            <ProjectsAndSkills/>
        </div>
        <footer className="footer" id="social-media-tag">
            <div className="container footer-style d-flex justify-content-around align-items-center py-3">
                <div>
                    <span className="footer-text">Let's connect</span>
                </div>
                <div>
                    <AiFillLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/yashwant-ram-a829a7165/')} className="footer-icon"/>
                    <AiFillInstagram onClick={() => openInNewTab('https://instagram.com/yashwant_ram_?igshid=ZDdkNTZiNTM=')} className="footer-icon"/>
                    <AiFillGithub onClick={() => openInNewTab('https://github.com/yashwantram97')} className="footer-icon"/>
                    <AiFillYoutube onClick={() => openInNewTab('https://www.youtube.com/channel/UC_gkjkxUQE2HIm7ozyaVXvA')} className="footer-icon"/>
                </div>
            </div>
        </footer>
    </div>
    )
}