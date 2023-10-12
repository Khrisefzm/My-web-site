import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ProjectCard from "./ProjectCard.jsx";

const MyProjects = () => {
  const { store } = useContext(AppContext);
  let language = store.language;

  return (
    <section className="container-fluid bg-projects p-5" id="my-projects">
      <h2>{language === "en" ? "My Projects" : "Mis Proyectos"}</h2>
      <div className="row">
        <ProjectCard />
      </div>
    </section>
  );
};

export default MyProjects;
