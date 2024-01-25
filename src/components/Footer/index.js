import './index.scss'
import { useEffect } from 'react';
import pokeBall from "../../assets/images/pokeball.png"
import { gsap } from "gsap";
import { useRef } from 'react';


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });


    const pokeballElement = footerRef.current.querySelector('.pokeball');
    const maxX = window.innerWidth - pokeballElement.clientWidth-19;
   
    tl.to(".pokeball", { x: maxX, rotation: 720, duration: 5 });
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <a href="https://youtu.be/UQoGyeeT2pw?si=nL2Rkb4qXwcf23oP&t=1" target="_blank" rel="noopener noreferrer">
        <img className="pokeball" src={pokeBall} alt="pokeball" />
      </a>

    </footer>
  )
} 

export default Footer;