import './index.scss'
import { Row, Col, Container } from "reactstrap";


import codeImage from '../../assets/images/code.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faDocker, faGithub, faHtml5, faJs, faNode, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGift } from "@fortawesome/free-solid-svg-icons";


const AboutPage = () => {

    console.log("About Page")
    return (
        <>
        <div className="page about-page animate__animated animate__fadeInRight">
            <Container className="mt-5">
                {/*//////////////// 1st Row //////////////// */}
                <Row className="row">
                    
                    <Col className="col" md="6">
                        <img src={codeImage} alt="Code Image"></img>
                    </Col>
                    <Col className="col" md="6">
                        <div className="text-zone">
                            <h1> Hello, <br /> I'm Manny Vera.
                                <br />
                            </h1>
                            <h2>Full Stack Developer | Product Oriented | Servant Leader</h2>
                        </div>
                    </Col>
                </Row>
                <hr class="bg-dark"></hr>

                {/*//////////////// 2nd Row //////////////// */}
                <Row className="row" id="row2">
                <Col className="col" md="6">
                        <div className="text-zone">
                            <h1> Technologies Used: <br />
                            </h1> 
                          
                        </div>
                    </Col>

                    <Col className="col" md="6">
                        <div className="logo-grid">
                            <FontAwesomeIcon className="icon python-color" icon={faPython} />
                            <FontAwesomeIcon className="icon" icon={faNode} color='#6cc24a'/>
                            <FontAwesomeIcon className="icon" icon={faHtml5}/>
                            <FontAwesomeIcon className="icon" icon={faCss3}/>
                            <FontAwesomeIcon className="icon" icon={faJs}/>
                            <FontAwesomeIcon className="icon" icon={faGithub}/>
                            <FontAwesomeIcon className="icon" icon={faReact}/>
                            <FontAwesomeIcon className="icon" icon={faDatabase}/>
                            <FontAwesomeIcon className="icon" icon={faDocker}/>
                            

                        </div>
                        {/* <img src={codeImage} alt="Code Image"></img> */}

                    </Col>
                    
                </Row>
                <hr class="bg-dark"></hr>

             
                <hr class="bg-dark" id="row3"></hr>
            </Container>


        </div>
        </>
    )
};

export default AboutPage;