import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CatAnimation from "./CatAnimation";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import { AppContext } from "../Context/AppContext";
import Technologies from "./Technologies.jsx";
import ProjectCard from "./ProjectCard.jsx";

const MainHome = () => {

  const { store } = useContext(AppContext);
  let language = store.language;


  return (
    <main className="mb-4">
      <section className="full-screen row">
        <div className="my-auto align-items-center">
          <div className="text-center m-auto container-title">
            <p className="text-center title-text">{language === "en" ? "Hi! I am" : "Hola! Soy"}</p>
            <h1 className="title-name text-center">Khrise<span className="block">Franchesca</span></h1>
            <h2 className="text-center title-text">{language === "en" ? "a Full Stack developer" : "desarrolladora Full Stack"}</h2>
            <Link to="#projects">
              <button className="btn btn-success my-4">{language === "en" ? "See my projects" : "Ver proyectos"}</button>
            </Link>
            <div className="d-flex justify-content-center">
              <Link to="https://www.linkedin.com/in/franchescazegarra" target="_blank" rel="noopener noreferrer">
                <img className="socialMedia" src={linkedin} alt="linkedin" loading="lazy" />
              </Link>
              <Link to="https://github.com/Khrisefzm" target="_blank" rel="noopener noreferrer">
                <img className="socialMedia" src={github} alt="github" loading="lazy" />
              </Link>
            </div>
          </div>
          <div className="col">
            <CatAnimation />
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <h2>{language === "en" ? "About me" : "Sobre mi"}</h2>
        <figure className="col-2 m-auto mb-3">
          <img className="img-profile" src="https://avatars.githubusercontent.com/u/129009072?s=400&u=03125cc60dd30d3e5dfb979266798fb957f2ad93&v=4" alt="" />
        </figure>
        <article>
          <p className="text-center">{language === "en" ? " I am a Full Stack developer who seeks to provide appropriate solutions to meet the comprehensive technological needs of projects, ensuring a seamless user experience and efficient operation across all layers of the application." : "Soy una desarrolladora Full Stack que busca brindar soluciones adecuadas para satisfacer las necesidades tecnológicas integrales de proyectos, garantizando una experiencia de usuario fluida y un funcionamiento eficiente en todas las capas de la aplicación."}</p>
        </article>
      </section>
      <section className="container">
        <h3>{language === "en" ? "My Skills" : "Mis Conocimientos"}</h3>
        <Technologies/>
      </section>

      <section className="container-fluid bg-projects p-5">
        <h2 id="projects">{language === "en" ? "My Projects" : "Mis Proyectos"}</h2>
        <div className="row">
          <ProjectCard/>
        </div>
      </section>
    </main>
  );
}

export default MainHome;