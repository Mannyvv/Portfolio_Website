// import { Link, NavLink } from 'react-router-dom';
// import './index.scss'
// import Logo from "../../assets/images/logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faContactBook,faUser, faProjectDiagram, faDiagramProject  } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin, faRProject, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const Header = () => {
//     return (
//         <div className='header animate__animated animate__fadeInDown' >
//             <Link className='logo ' to='/'>
//                 <img className='animate__animated animate__fadeInLeft' src={Logo} alt='Logo'></img>
//             </Link>
//             <nav>
//                 <NavLink exact="true" activeclassname="active" to='/'>
//                     <FontAwesomeIcon icon={faHome} color='#white'/>
//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className='about-link' to='/About'>
//                     <FontAwesomeIcon icon={faUser} color='#white'/>
//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className='projects-link' to='/Projects'>
//                     <FontAwesomeIcon icon={faDiagramProject} color='#white'/>
//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className='contact-link' to='/Contact'>
//                     <FontAwesomeIcon icon={faContactBook} color='#white'/>
//                 </NavLink>
//             </nav>
//         <ul className='animate__animated animate__fadeInRight'>
//             <li>
//                 <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/manuelvera1/'>
//                     <FontAwesomeIcon icon={faLinkedin} color='#19647E'/>
//                 </a>
//             </li>
//             <li>
//                 <a target='_blank' rel='noreferrer' href='https://github.com/Mannyvv'>
//                     <FontAwesomeIcon icon={faGithub} color='#19647E'/>
//                 </a>
//             </li>
//             <li>
//                 <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@Namespace_Manny'>
//                     <FontAwesomeIcon icon={faYoutube} color='#19647E'/>
//                 </a>
//             </li>
//         </ul>
//         </div>

//         )

// }

// export default Header;

// Header.js
import { useState } from "react";
import "./index.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faContactBook,
  faUser,
  faProjectDiagram,
  faDiagramProject,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faRProject,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <Navbar className="navbar-section" sticky="top" expand="sm">
      <NavbarBrand
        className="logo animate__animated animate__fadeInLeft"
        href="/"
      >
        <img src={Logo} alt="logo" />
      </NavbarBrand>

      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="nav-section mx-auto" navbar>
          <NavItem>
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#white" />{" "}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/About"
            >
              <FontAwesomeIcon icon={faUser} color="#white" />{" "}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact="true"
              activeclassname="active"
              className="projects-link"
              to="/Projects"
            >
              <FontAwesomeIcon icon={faDiagramProject} color="#white" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/Contact"
            >
              <FontAwesomeIcon icon={faContactBook} color="#white" />
            </NavLink>
          </NavItem>
        </Nav>

        {isOpen ? (
          
            <Dropdown className="small-links" isOpen={toggleOpen} toggle={() => setToggleOpen(!toggleOpen)}>
            <DropdownToggle  nav >
              <FontAwesomeIcon  icon={faLink} color="#19647E" />
            </DropdownToggle>
            <DropdownMenu style={{fontSize:"32px"}} left>
              <DropdownItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/manuelvera1/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#19647E" />
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Mannyvv"
                  >
                  <FontAwesomeIcon icon={faGithub} color="#19647E" />
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@Namespace_Manny"
                  >
                  <FontAwesomeIcon icon={faYoutube} color="#19647E" />
                </a>
              </DropdownItem>
            </DropdownMenu>
                  </Dropdown>
              
        ) : (
          <ul className="side-links animate__animated animate__fadeInRight">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/manuelvera1/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#19647E" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mannyvv"
              >
                <FontAwesomeIcon icon={faGithub} color="#19647E" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@Namespace_Manny"
              >
                <FontAwesomeIcon icon={faYoutube} color="#19647E" />
              </a>
            </li>
          </ul>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
