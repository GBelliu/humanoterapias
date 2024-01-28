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
  h1 {
    color: black;
  }
`;
export const Content = styled.div`
  max-width: 1394px;
  width: 100%;
  height: fit-content;
  display: flex;
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
