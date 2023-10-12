import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import CatAnimation from "./CatAnimation";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

const SectionOne = () => {
  const { store } = useContext(AppContext);
  let language = store.language;

  return (
    <section className="full-screen row">
      <div className="my-auto align-items-center">
        <div className="text-center m-auto container-title">
          <p className="text-center title-text">
            {language === "en" ? "Hi! I am" : "Hola! Soy"}
          </p>
          <h1 className="title-name text-center">
            Khrise<span className="block">Franchesca</span>
          </h1>
          <h2 className="text-center title-text">
            {language === "en"
              ? "a Full Stack developer"
              : "desarrolladora Full Stack"}
          </h2>
          <Link to="#projects">
            <button className="btn btn-success my-4">
              {language === "en" ? "See my projects" : "Ver proyectos"}
            </button>
          </Link>
          <div className="d-flex justify-content-center">
            <Link
              to="https://www.linkedin.com/in/franchescazegarra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socialMedia"
                src={linkedin}
                alt="linkedin"
                loading="lazy"
              />
            </Link>
            <Link
              to="https://github.com/Khrisefzm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socialMedia"
                src={github}
                alt="github"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="col">
          <CatAnimation />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
