// Import your CSS file for styles
import './index.scss';
import React, { useState, useRef } from 'react';
import { Container, Label, Input, Button, Row, Col, FormGroup } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { sentNotifcation } from '../../Features/Toasts';

import { ToastContainer } from 'react-toastify';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [message, setMessage] = useState('');
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('gmail_serviceId', 'PortContactForm', ref.current, "KpX63pSs8RGWsFcep");
            setName('');
            setEmail('');
            setLinkedin('');
            setMessage('');
            sentNotifcation();
        } catch (error) {
            console.error("Message Failed to Send:", error);
            
        }
    };

    return (
        <Container className='contact-page animate__animated animate__fadeInRight'>
            <h1>Contact Page</h1>
            <Row>
                <Col md="12">
                    {/* Reactstrap Form component wasn't working for some reason, switched to HTML */}
                    <form className="form-class" ref={ref} onSubmit={handleSubmit}>
                        <FormGroup className='group'>
                            <Label htmlFor="name" style={{ fontSize: "18px" }}>
                                Name*:
                            </Label>
                            <Input id="name" className='input' type="text" name='name' placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                            <br />
                            <Label htmlFor="email" style={{ fontSize: "18px" }}>
                                Email*:
                            </Label>
                            <Input id="email" className='input' type="email" name='email' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <Label htmlFor="linkedin" style={{ fontSize: "18px" }}>
                                LinkedIn:
                            </Label>
                            <Input id="linkedin" className='input' type="text" name='linkedin' placeholder='LinkedIn URL' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                            <br />
                            <Label htmlFor="message" style={{ fontSize: "18px" }}>
                                Message*:
                            </Label>
                            <Input id="message" className='input' type="textarea" name='message' placeholder='Enter Message Here' value={message} required onChange={(e) => setMessage(e.target.value)} />
                            <br />
                            <Button className='submit-button' type="submit">Submit</Button>
                        </FormGroup>
                    </form>
                </Col>
            </Row>
            <ToastContainer />  
        </Container>
    );
};

export default ContactPage;
