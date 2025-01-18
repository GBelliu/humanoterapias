import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(4,4,57,1), rgba(0,0,0,0.25)),url("./lotusbgg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(4, 4, 48, 1) 100%
  ); */
  margin-top: 75px;
`;

export const Content = styled.div`
  max-width: 1394px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 25px;
  

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px 12px;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    flex-flow: column;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-flow: column;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    padding: 35px 0;
    img {
      display: none;
    }
  }
`;

export const LeftContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 35px;
  align-items: center;
  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #f5f5f5;
    text-align: center;
  }

  button {
    width: fit-content;
    padding: 15px 35px;
    margin-top: 15px;
    background-color: #fff;
    color: #040439;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    box-shadow: 0px 1px 7px 1px rgba(255, 255, 255, 0.5), 0px 1px 7px 5px rgba(4, 4, 57, 0.5);
    &:hover {
      transform: scale(1.03) translateZ(0);
    }
    &:active {
      transform: scale(0.95) translateZ(0) !important;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
    h1 {
      font-size: 36px;
      text-align: center;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
    button {
      margin: 0 auto;
    }
  }
`;

export const Buttons = styled.div`
display: flex;
align-items: center;
gap: 25px;
`
export const FirstButton = styled.div`
 width: fit-content;
    padding: 15px 35px;
    margin-top: 15px;
    background-color: #fff;
    color: #040439;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    box-shadow: 0px 1px 7px 1px rgba(255, 255, 255, 0.5), 0px 1px 7px 5px rgba(4, 4, 57, 0.5);
    &:hover {
      transform: scale(1.03) translateZ(0);
    }
    &:active {
      transform: scale(0.95) translateZ(0) !important;
    }
`
export const LastButton = styled.div`
 width: fit-content;
    padding: 15px 35px;
    margin-top: 15px;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    box-shadow: 0px 1px 7px 1px rgba(255, 255, 255, 0.9), 0px 1px 7px 5px rgba(4, 4, 57, 0.9);
    &:hover {
      transform: scale(1.03) translateZ(0);
    }
    &:active {
      transform: scale(0.95) translateZ(0) !important;
    }
`