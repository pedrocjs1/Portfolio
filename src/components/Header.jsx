import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../style/App.css"
import Pdf from '../pdf/PedroVega-CV.pdf'



function Header() {
    return (
      <header id="inicio">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Hola, Soy Pedro</div>
            <div className="intro-heading">Java Full Stack Developer</div>
            <a href={Pdf} className="page-scroll text-white btn btn-xl  background">Descargar Cv</a>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;