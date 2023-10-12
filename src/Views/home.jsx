import React from "react";
import Navbar from "../Components/Navbar.jsx";
import SectionOne from "../Components/SectionOne.jsx";
import AboutMe from "../Components/AboutMe.jsx";
import MyProjects from "../Components/MyProjects.jsx";
import ContactMe from "../Components/ContactMe.jsx";
import Footer from "../Components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="mb-4">
        <SectionOne />
        <AboutMe />
        <MyProjects />
      </main>
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
