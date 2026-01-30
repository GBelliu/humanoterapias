import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Heart, MapPin, Phone, Mail } from "lucide-react";
import {
  Container,
  Content,
  ImageSection,
  ProfileImage,
  FloatingCard,
  InfoSection,
  SectionLabel,
  Name,
  Title,
  Credentials,
  CredentialItem,
  Bio,
  Specialties,
  SpecialtyTag,
  ContactInfo,
  ContactItem,
} from "./styles";

export function Sobre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const credentials = [
    { icon: Award, text: "CRTH-BR 11118" },
    { icon: MapPin, text: "Atendimento Online" },
  ];

  const specialties = [
    "Humanoterapeuta",
    "Psicoterapeuta Holística",
    "Radiestesia e Radiônica",
    "Mestre em Reiki",
    "Aromaterapeuta Flora",
  ];

  return (
    <Container id="sobre" ref={ref}>
      <Content>
        <ImageSection
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage>
            <img src="./perfil.png" alt="Christiane Bellissimo" />
          </ProfileImage>
          <FloatingCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Heart size={20} />
            <div>
              <strong>10+ anos</strong>
              <span>de experiência</span>
            </div>
          </FloatingCard>
        </ImageSection>

        <InfoSection
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionLabel>Sobre mim</SectionLabel>

          <Name>Christiane Bellissimo</Name>

          <Title>Humanoterapia & Terapias Holísticas</Title>

          <Credentials>
            {credentials.map((cred, index) => (
              <CredentialItem key={index}>
                <cred.icon size={16} />
                <span>{cred.text}</span>
              </CredentialItem>
            ))}
          </Credentials>

          <Bio>
            Ajudo pessoas a reconhecerem suas forças e valores, despertando
            autoconfiança para buscarem o que as fazem felizes. Através de
            técnicas energéticas e espirituais, guio cada pessoa em sua jornada
            única de autodescoberta e transformação.
          </Bio>

          <Bio>
            Minha abordagem é acolhedora e respeitosa, criando um espaço seguro
            onde você pode explorar suas emoções e encontrar caminhos para o
            equilíbrio e bem-estar.
          </Bio>

          <Specialties>
            {specialties.map((specialty, index) => (
              <SpecialtyTag
                key={index}
                as={motion.span}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {specialty}
              </SpecialtyTag>
            ))}
          </Specialties>
        </InfoSection>
      </Content>
    </Container>
  );
}
