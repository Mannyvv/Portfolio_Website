import { Row, Col, Container } from "reactstrap";
// import AnimatedLetters from "../../components/AnimatedLetters";
import './index.scss';
import codeImage from '../../assets/images/code.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faDocker, faGithub, faHtml5, faJs, faNode, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, } from "@fortawesome/free-solid-svg-icons";
import Quote from "../../components/Quotes";




const HomePage = () => {

    // const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = []
    
    return (
        <div className="page home-page ">
            <Container className="mt-5">
                {/*//////////////// 1st Row //////////////// */}
                <Row className="row">

                    <Col className="column d-none d-md-block" md="6">
                        <img src={codeImage} alt="Code"></img>
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
                    <Col className="column  d-none d-md-flex justify-content-center align-items-center" xs="12" md="6">
                        <div className="text-zone d-flex justify-content-center align-items-center">
                            <h1> Technologies<br /> Used
                            </h1>

                        </div>
                    </Col>

                    <Col className="column" xs="12" md="6">
                        <div className="logo-grid">
                            <a href="https://github.com/Mannyvv/SocketServer_Chat/blob/main/server.py" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon python-color" icon={faPython} color="#FFE052" />
                            </a>
                            <a href="https://github.com/Mannyvv/Portfolio_Website/blob/main/package.json" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faNode} color='#6cc24a' />
                            </a>
                            <a href="https://github.com/Mannyvv/Readme_Site/blob/main/index.html" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faHtml5} color="#F16529"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/Readme_Site/blob/main/css/site.css" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faCss3} color="#039BE5"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/Readme_Site/blob/main/js/bookData.js" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faJs} color="#FFD600"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faGithub} color="#000000"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/NoteApp_React_Backend/blob/main/Dockerfile" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faDocker} color="#0db7ed"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/NoteApp_React_Frontend/tree/main/src/components" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faReact} color="#00D8FF"></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/online_streamers/blob/main/online_stream.sql" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon database" icon={faDatabase}></FontAwesomeIcon>
                            </a>
                            <a href="https://github.com/Mannyvv/Portfolio_Website/blob/main/src/Pages/HomePage/index.scss" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" icon={faSass} color="#F06292"></FontAwesomeIcon>
                            </a>


                        </div>
                        {/* <img src={codeImage} alt="Code Image"></img> */}

                    </Col>

                </Row>
                <hr className="line-break bg-dark"></hr>
                <Quote />
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

