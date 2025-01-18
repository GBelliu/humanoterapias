import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  gap: 40px;
`;

export const Content = styled.div`
  max-width: 1394px;

  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column;
  gap: 50px;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export const ContentFormulario = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 900px) {
    align-items: center;
    margin-bottom: 50px;
  }

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;

    @media (max-width: 767px) {
      margin-top: 5rem;
      grid-template-columns: 1fr;
    }
    @media (max-width: 450px) {
      > button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
    }
  }

  input {
    height: 3rem;
    width: 100%;
    background-color: #fafafa;
    border: 1px solid #31395830;
    padding: 1.7rem 1.5rem;
    color: #040439;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;

    &:focus {
      border-color: #040439;
    }

    &::placeholder {
      color: #040439;
    }

    @media (max-width: 450px) {
      padding: 1.4rem;
      font-size: 1rem;
    }
  }
`;

export const Informacoes = styled.div`
  width: 100%;
  max-width: 520px;
  height: 707px;
  padding: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #062d2c;
  border-radius: 15px 25px;
  flex-direction: column;

  @media (max-width: 1510px) {
    width: 100%;

    position: static;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
    padding: 40px;
  }
  .infoText {
    display: flex;
    flex-direction: column;
    text-align: start;

    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      margin-bottom: 30px;
    }

    div {
      margin-bottom: 20px;
      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #f2f2f2;
      }

      span {
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #f2f2f2;
      }
    }
  }
  .infoMap {
    width: 100%;
    display: flex;
    margin: auto;

    iframe {
      height: 250px;
      width: 100%;
    }
  }
`;
