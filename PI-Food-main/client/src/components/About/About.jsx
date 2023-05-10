import React from "react";
import './About.css';
import { Link } from 'react-router-dom';


class About extends React.Component {
    constructor(props) {
        super(props);
    }


render() {
    return (
        <div className="contenedor-about">
            <div className="fondo-negro">
        <section className="imagen">
    <h2 className="Sobremi4">Hello, I introduce myself, I am Francisco Jesus Sanabria!😃</h2>
    <h3 className="Sobremi1">This is my first project handling different types of languages.
I am in the process of becoming a full stack developer.🖥️<br></br>
Next, I will leave my contacts so that they can communicate with me about any concerns.<br></br></h3>
   <p><a href="https://www.instagram.com/fran.sanabria/" target="_blank" />
            <li className="instagram">instagram</li>
            <a  href="https://github.com/FranSanabri" target="_blank"> 
            <li className="github">github</li></a>
            
            <a  href="https://www.linkedin.com/in/francisco-jesus-sanabria-07b189236/" target="_blank"> 
            <li className="linkedin">Linkedin</li></a>

          
            <li className="react">react</li>

       
            <li className="css">css</li>

      
            <li className="js">js</li>

            
            <li className="html5">html5</li>

            </p>
            <p className="texto2">Lenguages used for the project, in the process of adding more.</p>
            <p className="texto3">Contacts</p>
            <p className="info">ABOUT</p>
            <p className="derechos">Thank you for visiting my Project!</p>
            <Link to="/home"><a className="codepen-button"><span>Volver a la pagina de las recetas</span></a>.</Link>
    </section>
        </div></div>
        
     );
     
    }
}
export default About;