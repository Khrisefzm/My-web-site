import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import github from "../img/github.png";
import "../Styles/projectCard.css";

const ProjectCard = () => {
  const { store } = useContext(AppContext);
  let language = store.language;

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-6 mx-5">
      <figure>
        <img src="" alt="" loading="lazy" />
      </figure>
      <h3 className="text-center">Name</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        deserunt mollitia dolor quidem praesentium quis officiis, culpa fugiat
        porro, voluptatem minima aut a, ipsa blanditiis eaque animi quibusdam
        voluptatibus accusantium.
      </p>
      <div className="d-flex justify-content-center">
        <Link to="">
          <button
            className="btn btn-success me-3 rounded-pill border border-0"
            type="submit"
          >
            {language === "en" ? "See web" : "Ver web"}
          </button>
        </Link>
        {/* <Link to="">
                    <button className="btn btn-secondary" type="submit">{language === "en" ? "See repository" : "Ver repositorio"}</button>
                </Link> */}
        <button className="Btn">
          <div className="sign">
            <img src={github} alt="Gihub logo" />
          </div>
          <div className="text">
            {language === "en" ? "See repository" : "Ver repositorio"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
