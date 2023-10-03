import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center flex-column w-100">
          <div className="">
            <span className="copyright">¡Ponerse En Contacto!</span>
          </div>
          <div className="">
            <ul className="d-flex justify-content-center gap-2 social-buttons">
              <a href="https://github.com/pedrocjs1" target="_blank">
                <AiFillGithub style={{ fontSize: "3rem", color: "black" }} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-vega-72a7a8239/"
                target="_blank"
              >
                <AiFillLinkedin style={{ fontSize: "3rem", color: "black" }} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
