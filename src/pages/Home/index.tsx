import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Humanoterapia } from "../../components/Humanoterapia";
import { MetodologiaHumanoterapeuta } from "../../components/MetodologiaHumanoterapeuta";
import { Sobre } from "../../components/Sobre";
import Servicos from "../../components/Servicos";

const Home = () => {
  return (
    <>
      <Hero />

      {/* <Psicoterapias /> */}
      {/* <RadiestesiaRadionica /> */}
      {/* <Reiki />  */}
      <Humanoterapia />
      <MetodologiaHumanoterapeuta />
      <Sobre />
    </>
  );
};

export default Home;
