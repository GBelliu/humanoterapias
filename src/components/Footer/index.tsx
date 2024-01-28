import { Link } from "react-scroll";
import {
  Container,
  Content,
  Desenvolvido,
  Item,
  Left,
  Logo,
  Right,
  Social,
} from "./styles";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>
            <img src="./logo2.png" alt="" />
            <Social>
              <Instagram color="#FFF" />
              <Facebook color="#FFF" />
              <Linkedin color="#FFF" />
            </Social>
          </Logo>
        </Left>

        <Right>
          <Item>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Humanoterapia</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Técnicas</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Sobre mim</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Psicoterapias Holísticas</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Radiestesia Radiônica</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Reiki</h2>
            </Link>
            <Link to="" href="/" smooth={true} duration={500} offset={-100}>
              <h2>Contato</h2>
            </Link>
          </Item>
        </Right>
      </Content>
    </Container>
  );
}
