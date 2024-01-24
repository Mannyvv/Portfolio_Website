import React, { useState } from 'react';
import './index.scss';
import { Container } from 'reactstrap';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const AboutPage = () => {
    const [open, setOpen] = useState(['1', '2', '3']);

    // Modify the toggle function to add or remove IDs from the open array
    const toggle = (id) => {
        if (open.includes(id)) {
            setOpen(open.filter(item => item !== id));
        } else {
            setOpen([...open, id]);
        }
    };


    return (
        <div className="page about-page animate__animated animate__fadeInRight"> 
            <Container className="about-me">
                <h1>About Me</h1> 
                <Accordion open={open} toggle={toggle} className='accordion' >
                    <AccordionItem>
                        <AccordionHeader targetId="1" className={open === '1' ? 'open' : ""}><h2>Professional</h2></AccordionHeader>
                        <AccordionBody accordionId="1">
                            <h4>
                                A recent Nucamp Full Stack boot camp grad diving into web tech <span className='shake '>(React fan here!)</span> and backend tech
                                (Python, Express.js, MongoDB enthusiast).
                                <br />
                                My journey? It's been a mix of IT project management in tech and construction, sprinkled
                                with a background in electrical engineering.
                                <br />
                                I get a kick out of collaborative problem-solving, treating challenges like growth opportunities.
                                As a servant leader, I'm all about continuous improvement. 🚀
                            </h4>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2" className={open === '2' ? 'open' : ""}><h2>Personal</h2></AccordionHeader>
                        <AccordionBody accordionId="2">
                            <h4>Hi, I'm [Your Name]

                                I'm a [Your Job Title] with [Number of Years of Experience] years of experience in the tech industry.
                                I specialize in [Your Specialties]. In my previous role at [Previous Company Name], I [What You Accomplished or Learned There].
                            </h4>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3" className={open === '3' ? 'open' : ""}><h2>Learning</h2></AccordionHeader>
                        <AccordionBody accordionId="3">
                            <h4>
                                <ul>
                                    <li>🌱 I’m currently improving on: Animations, SaSS, Heroku, Node.js, Githubpages and more!</li>
                                    <li><span className='shake'>👯</span>I’m looking to collaborate on: Anything! I'm always looking to learn and grow.</li>
                                    <li>💬 Ask me about: My journey into tech, my experience with Nucamp, and my interests.</li>
                                </ul>
                            </h4>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Container>
        </div>
    )
}

export default AboutPage;