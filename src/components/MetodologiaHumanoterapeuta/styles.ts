import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  gap: 40px;
  p {
    color: black;
  }

  @media (max-width: 767px) {
    h1 {
      text-align: center;
    }
  }
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

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 964px;
  width: 100%;
  gap: 15px;
  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  h2 {
    color: black;
  }
  p {
    color: black;
  }
`;
export const ImageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    height: 400px;
    background-color: #dbdbdb;
    display: flex;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
