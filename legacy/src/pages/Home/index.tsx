import { Hero } from "../../components/Hero";
import { Humanoterapia } from "../../components/Humanoterapia";
import Servicos from "../../components/Servicos";
import { Estatisticas } from "../../components/Estatisticas";
import { Depoimentos } from "../../components/Depoimentos";
import { Sobre } from "../../components/Sobre";
import Contato from "../../components/Contato";

const Home = () => {
  return (
    <>
      <Hero />
      <Humanoterapia />
      <Servicos />
      <Estatisticas />
      <Depoimentos />
      <Sobre />
      <Contato />
    </>
  );
};

export default Home;
