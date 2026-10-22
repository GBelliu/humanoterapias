import styled from "styled-components";

export const Container = styled.div`
  max-width: 964px;
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 50px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: flex;
    max-width: 350px;
    flex-flow: column;
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
