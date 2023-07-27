import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contactar</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>¿Quieres ponerte en contacto? Contáctame en cualquiera de las plataformas o diegocastrocifuentes@gmail.com</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;