import Logo from "../../assets/images/logo.png";
import './index.scss';

const HomePage = () => {
    return (
        <div className="container home-page animate__animated animate__rotateInUpLeft">
            <h1>Hi , <br/> I'm ddd
            <img src={Logo} alt="Logo"></img>
            </h1>
           
        </div>        
    )
}

export default HomePage