import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ContactMe = () => {
  const { store } = useContext(AppContext);
  const language = store.language;

  return (
    <section className="container">
      <h2 className="text-center">
        {language === "en" ? "Let's get in touch" : "Estemos en contacto"}
      </h2>
      <form className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto" action="">
        <div className="mb-3">
          <label className="form-label">
            {language === "en" ? "Full Name:" : "Nombres y apellidos:"}
          </label>
          <input type="email" className="form-control" name="fullName" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">
            {language === "en" ? "Message:" : "Mensaje:"}{" "}
          </label>
          <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          {language === "en" ? "Submit" : "Enviar"}
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
