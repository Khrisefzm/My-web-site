import React from "react";
import Navbar from "../Components/Navbar.jsx";
import MainHome from "../Components/MainHome.jsx";
import ContactMe from "../Components/ContactMe.jsx";
import Footer from "../Components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainHome />
      <ContactMe />
      <Footer />
    </>

  );
}

export default Home;