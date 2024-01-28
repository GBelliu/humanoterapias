import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Container, ContentFormulario, Forms, Informacoes } from "./styles";
import emailjs from "@emailjs/browser";
import Loader from "../elements/Loader";

import { ArrowRight } from "lucide-react";

function Contato() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [data, setData] = useState({
    name: "",
    mail: "",
    phone: "",
    servico: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const form = useRef(null);
  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  //   console.log("aaa");
  //   // if (data.acceptData === "Sim") {
  //   if (Number(data.calc) === Number(num1) + Number(num2)) {
  //     setLoadingForm(true);
  //     emailjs
  //       .send("service_n8e9ty1", "template_digpa17", data, "_3hkY6JzNsEF01eIA")
  //       .then(
  //         (result) => {
  //           toast.success(
  //             "Dados enviados com sucesso! Entraremos em contato em breve."
  //           );

  //           setLoadingForm(true);
  //           setData({
  //             name: "",
  //             mail: "",
  //             phone: "",
  //             calc: "",
  //           });
  //         },
  //         (error) => {
  //           toast.error(
  //             "Ocorreu um erro ao enviar. Preencha os dados e tente novamente!"
  //           );
  //           setLoadingForm(true);
  //         }
  //       )
  //       .finally(() => {
  //         setLoadingForm(false);
  //         setData({
  //           name: "",
  //           mail: "",
  //           phone: "",
  //           calc: "",
  //         });
  //       });
  //   } else {
  //     toast.info("Digite o cálculo correto!");
  //     setLoadingForm(false);
  //   }
  // };

  return (
    <Container id="contato">
      <ContentFormulario>
        <Forms>
          <h1>Vamos agendar uma consulta?</h1>
          <p>Preencha o formulário abaixo que irei retornar em breve.</p>
          {/* <form action="" onSubmit={sendEmail} ref={form}> */}
          <form action="" ref={form}>
            <div className="formItem">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Celular"
                maxLength={16}
                value={data.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value.replace(
                      /(\d{2})(\d{1})(\d{4})(\d{4})/,
                      "($1) $2 $3-$4"
                    ),
                  })
                }
                required
              />
            </div>

            <div className="formItem">
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="E-mail"
                value={data.mail}
                onChange={(e) => setData({ ...data, mail: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="calc"
                id="calc"
                placeholder={"Serviço"}
                value={data.servico}
                onChange={(e) => setData({ ...data, servico: e.target.value })}
                required
              />
            </div>
          </form>
          <button
            type="submit"
            // type="submit"
            // text={loadingForm ? <Loader /> : "Enviar"}
            // icon={<ArrowRight color="#FFFFFF" />}
          >
            Enviar
          </button>
        </Forms>
      </ContentFormulario>
    </Container>
  );
}

export default Contato;
