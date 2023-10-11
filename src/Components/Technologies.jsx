import React from "react";
import html_img from "../img/Tecnologies/html.png";
import css_img from "../img/Tecnologies/css.png";
import javascript_img from "../img/Tecnologies/javascript.png";
import react_img from "../img/Tecnologies/reactjs.png";
import bootstrap_img from "../img/Tecnologies/bootstrap.png";
import wordpress_img from "../img/Tecnologies/wordpress.png"
import python_img from "../img/Tecnologies/python.png";
import git_img from "../img/Tecnologies/git.png";
import mysql_img from "../img/Tecnologies/mysql.png";
import nodejs_img from "../img/Tecnologies/nodejs.png";
import flask_img from "../img/Tecnologies/flask.png";


const Technologies = () => {

  let first_row = [html_img, css_img, javascript_img, react_img, bootstrap_img, wordpress_img];
  let second_row = [python_img, git_img, mysql_img, nodejs_img, flask_img];
  return (
    <>
      <div className="row d-flex justify-content-center">
        {
          first_row.map((element, key) => {
            return (
              <figure className="col-lg-2 col-md-2 col-sm-4 col-4 mb-5" key={key}>
                <img className="skills-img" src={element} alt="technology" loading="lazy" />
              </figure>
            );
          })
        }
      </div>
      <div className="row d-flex justify-content-center">
        {
          second_row.map((element, key) => {
            return (
              <figure className="col-lg-2 col-md-2 col-sm-4 col-4 mb-5" key={key}>
                <img className="skills-img" src={element} alt="technology" loading="lazy" />
              </figure>
            );
          })
        }
      </div>
    </>
  );
}

export default Technologies;
