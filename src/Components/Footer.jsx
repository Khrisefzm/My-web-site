import React, { useContext } from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
    const { store } = useContext(AppContext);
    let language = store.language;
    return (
        <footer className="container-fluid bg-secondary-subtle mt-4 py-2 px-5">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sd-12 col-12">
                    <p className="my-0 text-lg-start text-md-start text-center">Follow me:</p>
                    <div className="d-flex justify-content-lg-start justify-content-center">
                        <Link to="https://www.linkedin.com/in/franchescazegarra" target="_blank" rel="noopener noreferrer">
                            <img className="socialMedia" src={linkedin} alt="linkedin" loading="lazy" />
                        </Link>
                        <Link to="https://github.com/Khrisefzm" target="_blank" rel="noopener noreferrer">
                            <img className="socialMedia" src={github} alt="github" loading="lazy" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sd-12 col-12 d-flex align-self-center">
                    <p className="mx-auto my-0 my-auto">{`© 2023 Franchesca Zegarra. ${language === "en" ? "All rights reserved." : "Todos los derechos reservados"}`}</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;