import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/App.css";
import { FiLink } from "react-icons/fi";
import { DiCode } from "react-icons/di";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Algunos de mis projectos.
            </h3>
          </div>
        </div>
        <div className="row d-flex gap-3 flex-wrap justify-content-center align-items-center">
          <div className="card card-container text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-2">
              <h5 className="card-title">HomeBanking MindHub Bank</h5>
              <p className="card-text">
                Aplicación HomeBanking hecha con Java, Spring y entre otras
                tecnologías.
              </p>
              <p className="card-text">
                Donde un usuario puede registrarse, pedir préstamo, crear
                cuentas, pedir tarjeta, hacer transferencias, entre otras
                funcionalidades.
              </p>
              <a
                href="https://github.com/pedrocjs1/HomeBanking"
                className="navbar-toggler border-style"
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>
          <div className="card card-container-petShop text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-3">
              <h5 className="card-title">E-commerce Huellitas</h5>
              <p className="card-text">
                Aplicación creada para tu mejor amigo, en ella podrás encontrar
                juguetes y remedios para mascotas
              </p>
              <a
                href="https://github.com/pedrocjs1/huellitas"
                className="navbar-toggler border-style"
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>
          <div className="card card-container-lawer text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-3">
              <h5 className="card-title">Lawyer Website Development</h5>
              <p className="card-text">
                Web para Bufete de abogados que buscan expandir su clientera
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/pedrocjs1/proyecto-abogados"
                  className="navbar-toggler border-style"
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>

          <div className="card card-container-tech text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-3">
              <h5 className="card-title">E-commerce Tech Titans</h5>
              <p className="card-text">
                Aplicación creada para la venta de componentes de pc, donde un
                usuario podrá crearse una cuenta, iniciar sesión, agregar
                productos a su carrito y finalizar una compra.
              </p>
              <a
                href="https://github.com/pedrocjs1/techtitans"
                className="navbar-toggler border-style"
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>

          <div className="card card-container-amazing text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-3">
              <h5 className="card-title">E-commerce Amazing Events</h5>
              <p className="card-text">
                Aplicacion de eventos, realizada unicamente con
                JavaScript(Vue.js), HTML y CSS. Cuenta con filtrado por checkbox
                y por buscador.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://pedrocjs1.github.io/AMAZINGEVENTS/"
                  className="navbar-toggler border-style"
                  target="_blank"
                >
                  <FiLink color="#fff" />
                </a>
                <a
                  href="https://github.com/pedrocjs1/AMAZINGEVENTS"
                  className="navbar-toggler border-style"
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>

          <div className="card card-container-snake text-white">
            <div className="card-img-overlay text-center gap-2 d-flex flex-column justify-content-center align-items-center card-text-h p-3">
              <h5 className="card-title">Juego Snake</h5>
              <p className="card-text">
                Juego Snake Descargable hecho con python y turtle.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/pedrocjs1/SnakeGameWith-Python-turtle"
                  className="navbar-toggler border-style"
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
