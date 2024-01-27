import { Row, Col, Container } from "reactstrap";
import AnimatedLetters from "../../components/AnimatedLetters";
import './index.scss';
import codeImage from '../../assets/images/code.png'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faDocker, faGithub, faHtml5, faJs, faNode, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, } from "@fortawesome/free-solid-svg-icons";




const HomePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = []
    return (
        <div className="page home-page animate__animated animate__fadeInRight">
            <Container className="mt-5">
                {/*//////////////// 1st Row //////////////// */}
                <Row className="row">
                     
                    <Col className="column d-none d-md-block"  md="6">
                        <img src={codeImage} alt="Code Image"></img>
                    </Col>
                    <Col className="column" xs="12" md="6">
                        <div className="text-zone">
                            <h1> Hello, <br /> I'm Manny Vera. 
                                <br />
                            </h1>
                            <h2>Full Stack Developer | Product Oriented | Servant Leader</h2>
                        </div>
                    </Col>
                </Row> 
                <hr className="line-break bg-dark"></hr>

                {/*//////////////// 2nd Row //////////////// */}
                <Row className="row">
                <Col className="column d-none d-md-block" xs="12" md="6">
                        <div className="text-zone">
                            <h1> Technologies<br/> Used:
                            </h1>
                           
                        </div>
                    </Col> 

                    <Col className="column" xs="12" md="6">
                        <div className="logo-grid">
                           <FontAwesomeIcon className="icon python-color" icon={faPython} color="#FFE052" />
                            <FontAwesomeIcon className="icon" icon={faNode} color='#6cc24a'/>
                            <FontAwesomeIcon className="icon" icon={faHtml5} color="#F16529"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faCss3} color="#039BE5"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faJs} color="#FFD600"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faGithub} ></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faDocker} color="#0db7ed"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faReact}color="#00D8FF"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon database" icon={faDatabase}></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon={faSass} color="#F06292"></FontAwesomeIcon>
                            

                        </div>
                        {/* <img src={codeImage} alt="Code Image"></img> */}

                    </Col>
                    
                </Row>
                <hr className="line-break bg-dark"></hr>

                {/*//////////////// 3rd Row //////////////// */}
                {/* Holder */}
                {/* <Row className="row" >
                    <Col className="col" md="6">
                        
                    </Col>

                    <Col className="col" md="6">
                        
                    </Col>
                </Row>
                <hr className="bg-dark"></hr> */}
            </Container>

        </div>
    )
} 

export default HomePage