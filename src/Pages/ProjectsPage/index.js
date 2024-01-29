import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
import './index.scss';
import { Cards } from '../../data/cardImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const ProjectsPage = () => {
    

    const cards = Cards


    return (
        <>
            <Container className='project-page animate__animated animate__fadeInRight'> 
                <h1>Projects Page</h1>
                <Row>
                    {cards.map((card, index) => (
                        <Col sm="4" key={index}>
                            <Card className='card'>
                                <CardBody>
                                    <CardTitle tag="h2">{card.title}</CardTitle>
                                </CardBody>
                                <CardBody>
                                    <img src={card.image} alt='Images'></img>
                                </CardBody>
                                <CardBody>
                                    <CardText className='card-text'>{card.text}</CardText>
                                    {card.links.map((link, index) => (
                                        <Button className='button-link' key={index} tag='a' href={link} target="_blank" rel="noopener noreferrer">
                                            {link.includes('github') && <FontAwesomeIcon icon={faGithub} color='#19647E' />}
                                            {link.includes('you') && <FontAwesomeIcon icon={faYoutube} color='#19647E' />}
                                            {!link.includes('github') && !link.includes('you') && <FontAwesomeIcon icon={faGlobe} color='#19647E' />}
                                        </Button>
                                    ))}
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <hr className=" line-break bg-dark"></hr>
                <Row className="row">
                    <Col className="col d-flex justify-content-center mt-5" md="12">
                        <div className="text-button d-flex flex-column align-items-center">
                            <h1>Please Check Out my Github for more projects!</h1>
                            <Button className='button-link justify-self-center' tag='a' href="https://github.com/Mannyvv" target="_blank" rel="noopener noreferrer">Click Here!</Button>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </>
    );
};

export default ProjectsPage;