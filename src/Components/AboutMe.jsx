import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Technologies from "./Technologies.jsx";

const AboutMe = () => {
  const { store } = useContext(AppContext);
  let language = store.language;

  return (
    <section className="container mt-5" id="about-me">
      <h2>{language === "en" ? "About me" : "Sobre mi"}</h2>
      <figure className="col-2 m-auto mb-3">
        <img
          className="img-profile"
          src="https://avatars.githubusercontent.com/u/129009072?s=400&u=03125cc60dd30d3e5dfb979266798fb957f2ad93&v=4"
          alt=""
        />
      </figure>
      <article>
        <p className="text-center">
          {language === "en"
            ? " I am a Full Stack developer who seeks to provide appropriate solutions to meet the comprehensive technological needs of projects, ensuring a seamless user experience and efficient operation across all layers of the application."
            : "Soy una desarrolladora Full Stack que busca brindar soluciones adecuadas para satisfacer las necesidades tecnológicas integrales de proyectos, garantizando una experiencia de usuario fluida y un funcionamiento eficiente en todas las capas de la aplicación."}
        </p>
      </article>
      <article>
        <p className="text-center">
          {language === "en" ? "My skills are:" : "Mis conocimientos son:"}
        </p>
        <Technologies />
      </article>
    </section>
  );
};

export default AboutMe;
