import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faContactBook,faUser  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='Logo'></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color='#white'/> 
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#white'/> 
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faContactBook} color='#white'/> 
                </NavLink>
            </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/manuelvera1/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#19647E'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Mannyvv'>
                    <FontAwesomeIcon icon={faGithub} color='#19647E'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@Namespace_Manny'>
                    <FontAwesomeIcon icon={faYoutube} color='#19647E'/>
                </a>
            </li>
        </ul>
        </div>

        
        ) 

}

export default Header;