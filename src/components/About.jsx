import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/App.css';
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import { HiMail } from "react-icons/hi";



export default function About() {
  return (
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Sobre Mi</h2>
                    <h3 className="section-subheading text-muted">Introduction</h3>
                </div>
            </div>
            <div className='d-flex w-100 gap-3 justify-content-around'>

                <div className="d-flex justify-content-center image-me flex-wrap gap-3   col w-50">
                            
                </div>
                <div className="d-flex  justify-content-center flex-wrap gap-3 container-about  text-start w-50">
                    <p className=''>
                    ¡Hola! Soy un Desarrollador 𝗙𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 Java al que le encanta crear aplicaciones web estéticas y funcionales. Soy un profesional altamente motivado al que le fascina trabajar en entornos desafiantes que me permitan crecer y mejorar mis habilidades. Tengo experiencia en un entorno de trabajo real simulado. Me apasiona la resolución de problemas, el diseño, el trabajo en equipo y el aprendizaje constante. Con todos mis conocimientos estoy seguro que puedo aportar grandes ideas y soluciones. Tendrás lo mejor de mí trabajando en proyectos exigentes, implementando AGILE.
                    </p>
                    <div className='w-100'>
                        <AiFillLinkedin  />
                        <a className='ps-1' href="https://www.linkedin.com/in/pedro-vega-72a7a8239/">Pedro Vega</a>
                    </div>
                    <div className='w-100'>
                        <AiFillGithub  />
                        <a className='ps-1' href="https://github.com/pedrocjs1">Mi GitHub</a>
                    </div>
                    <div className='w-100'>
                        <HiMail  />
                        <a className='ps-1' href="mailto:pedrovega4680@gmail.com">pedrovega4680@gmail.com</a>
                    </div>
                    <div>
                        
                    </div>    
                
                </div>
            </div>
        
        </div>
    </section>
  );
}

