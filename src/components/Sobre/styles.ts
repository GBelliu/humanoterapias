import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  h1 {
    color: black;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 75px;
  gap: 25px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

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

export const LeftContent = styled.div`
  width: 40%;
  height: 100%;
  div {
    height: 400px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const RightContent = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 25px;
  width: 60%;
  div {
    display: flex;
    flex-flow: column;
    gap: 5px;
    h1 {
      font-size: 36px;
      color: #000;
      font-weight: 600;
    }
    h2 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
      max-width: 800px;
    }
  }

  p {
    font-size: 18px;
  }

  button {
    width: fit-content;
    padding: 15px 20px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 4px 12px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;

    &:hover {
      background-color: #000;
      border: none;
      color: #3f5efb;
      box-shadow: 0px 10px 15px -3px rgba(51, 139, 255, 0.2);
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
