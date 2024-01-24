import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import { Cards } from '../../data/cardImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const ProjectsPage = () => {

    const cards = Cards


    return (
        <>
            <Container className='project-page'>
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
            </Container>
        </>
    );
};

export default ProjectsPage;