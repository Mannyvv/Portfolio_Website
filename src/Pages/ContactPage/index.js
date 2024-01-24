
import { useState } from 'react';
import { Container, Form, Label, Input, Button, Row, Col ,FormGroup} from 'reactstrap';
import './index.scss';
const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, linkedin, message);
        setName('');
        setEmail('');
        setLinkedin(''); 
        setMessage('');

        // TODO: Add a toast here to show the user that the message was sent
        // Handle form submission logic here 
    };
    const inputStyle = {lineHeight:"44px", fontSize:"18px"}
    const messageStyle = {lineHeight:"44px", fontSize:"18px", height:"200px"}
    const labelStyle = {fontSize:"18px"}

    return (
        <Container className='contact-page'>
            <h1>Contact Page</h1>
            <Row >
                <Col md="12" className='' >
                    <Form className="form-class"  onSubmit={handleSubmit}>
                        <FormGroup className='group'>
                        <Label >
                            Name:
                        </Label>
                            <Input className='input' type="text"  value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        <Label >
                            Email:
                        </Label>
                            <Input className='input' type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <Label >
                            LinkedIn:
                        </Label>
                            <Input className='input' type="text"  value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                        <br />
                        <Label >
                            Message:
                        </Label>
                            <Input className='input' type="textarea"  value={message} onChange={(e) => setMessage(e.target.value)} />
                        <br />
                        <Button type="submit">Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
