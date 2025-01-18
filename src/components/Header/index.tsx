import { useState } from "react";
import { Container, Content, ItemsMenu } from "./styles";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <Container>
      <Content>
        <img src="./logo2.png" alt="" />
        <ItemsMenu>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Início
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Humanoterapia
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Técnicas
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Sobre mim
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Contato
          </Link>
          {/* Agendar uma consult CTA */}
        </ItemsMenu>
        <Menu
          right
          className="menuBox"
          isOpen={isOpenMenu}
          onOpen={() => setIsOpenMenu(true)}
          onClose={() => setIsOpenMenu(false)}
        >
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Humanoterapia
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Técnicas
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Sobre mim
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Psicoterapias Holísticas
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Radiestesia Radiônica
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Reiki
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Contato
          </Link>
        </Menu>
      </Content>
    </Container>
  );
}
