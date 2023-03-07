import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/App.css';
import BackEnd from '../images/BackEnd.png'
import FrontEnd from '../images/FrontEnd.png'
import Ceo from '../images/Ceo.png'
import BaseDeDatos from '../images/BaseDeDatos.png'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Servicios</h2>
            <h3 className="section-subheading text-muted">Mis Servicios</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 srow text-center">
          <div className="card card-edit p-3">
            <img src={FrontEnd} className="card-img-top" alt="FrontEnd" />
            <div className="card-body">
              <p className="card-text text-break">Desarrollo FrontEnd</p>
            </div>
          </div>
          <div className="card card-edit p-3" >
            <img src={BackEnd} className="card-img-top" alt="BackEnd" />
            <div className="card-body">
              <p className="card-text text-break">Desarrollo BackEnd</p>
            </div>
          </div>
          <div className="card card-edit p-3">
              <img src={BaseDeDatos} className="card-img-top" alt="BaseDeDatos" />
              <div className="card-body">
                <p className="card-text text-break">Base de datos</p>
              </div>         
          </div>
          <div className="card card-edit p-3" >
            <img src={Ceo} className="card-img-top" alt="Ceo" />
            <div className="card-body">
              <p className="card-text "><span className='text-break'>Posicionamiento &nbsp;SEO</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

