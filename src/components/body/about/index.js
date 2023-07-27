import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hola ✋, soy
         <br /> <span className="info-name">Diego Castro</span>.
         <br /> Estudiante de Ingieneria Civil en Informatica. 
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/programing.png")}
            alt={"imagen del principio, head"}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;