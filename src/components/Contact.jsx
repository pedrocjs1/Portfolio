import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/App.css';
import {send, init} from '@emailjs/browser'
import Swal from 'sweetalert2'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const Swal = require('sweetalert2')

    useEffect(() => {
        init("nTXaQ2Lg9vkjyoBHt")
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !email || !msg || !email.includes("@") || !email.includes(".")) {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor complete todos los campos.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
        
        send('service_g3yun4c', 'template_gnri6s6', {
            from_name: email,
            to_name: name,
            message: msg 
        });
        setName('');
        setEmail('');
        setMsg('');
        Swal.fire({
            title: 'Correo enviado!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }
    
   
    

  return (
    <section id="contact" className='p-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-black">Contact Us</h2>
            <h3 className="section-subheading contact-subtitle ">Contactar conmigo</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input value={name} type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." onChange={(event) => setName(event.target.value)} />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input value={email} type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." onChange={(event) => setEmail(event.target.value)} />
                    <p className="help-block text-danger" />
                  </div>
                  
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                  <textarea value={msg} className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message." onChange={(event) => setMsg(event.target.value)} />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button onClick={handleSubmit} type="submit" className="btn btn-send btn-xl">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

