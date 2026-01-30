import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ArrowRight, Send, CheckCircle, Smartphone } from "lucide-react";
import {
  Container,
  Content,
  LeftContent,
  RightContent,
  SectionLabel,
  Title,
  Description,
  Form,
  FormGroup,
  Input,
  Select,
  SubmitButton,
  InfoCard,
  InfoCardIcon,
  InfoCardContent,
  FeaturesList,
  FeatureItem,
} from "./styles";

function Contato() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15);
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulando envio - substitua pelos dados reais do EmailJS
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      );
      setFormData({ name: "", email: "", phone: "", service: "" });
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    "Mesa Quântica",
    "Humanometria",
    "Taquions Tock",
    "TDR",
    "Regressão com Reprogramação",
    "Baralho Terapêutico",
    "Outro",
  ];

  const features = [
    "Receba suporte que vem com calma e cuidado",
    "Trabalhe no que está em sua mente, gentilmente",
    "Acessível e fácil de começar",
  ];

  return (
    <Container id="contato" ref={ref}>
      <Content>
        <LeftContent
          as={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Pronto para começar?</SectionLabel>

          <Title>
            Pare de carregar sozinho. <span>Comece a se sentir apoiado</span>
          </Title>

          <Description>
            Você não precisa ter tudo resolvido antes de buscar ajuda. A
            Humanoterapia é um guia gentil que ajuda você a encontrar
            equilíbrio, clareza e apoio — e começa com você.
          </Description>

          <InfoCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InfoCardIcon>
              <Smartphone size={24} />
            </InfoCardIcon>
            <InfoCardContent>
              <h4>Insight - Bem-estar Emocional</h4>
              <p>
                Suporte funciona melhor quando é acessível, fácil e seguro para
                começar
              </p>
            </InfoCardContent>
          </InfoCard>

          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <CheckCircle size={18} />
                <span>{feature}</span>
              </FeatureItem>
            ))}
          </FeaturesList>
        </LeftContent>

        <RightContent
          as={motion.div}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h3>Agende sua consulta</h3>
            <p>Preencha o formulário que retornarei em breve.</p>

            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="tel"
                name="phone"
                placeholder="Seu telefone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                required
              />
            </FormGroup>

            <FormGroup>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Selecione um serviço (opcional)</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  Agendar consulta
                  <Send size={18} />
                </>
              )}
            </SubmitButton>
          </Form>
        </RightContent>
      </Content>
    </Container>
  );
}

export default Contato;
