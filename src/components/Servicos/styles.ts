import styled from "styled-components";

export const Container = styled.section`
  display: block;

  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 9.375rem;
`;

export const ContentService = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  text-align: start;
  gap: 2.5rem;

  @media (max-width: 900px) {
    flex-flow: nowrap;
    margin-bottom: 40px;
    gap: 2.25rem;
  }

  @media (max-width: 700px) {
    gap: 1.25rem;
  }
  @media (max-width: 500px) {
    gap: 0.25rem;
  }

  button {
    border: none;
    background: transparent;
    text-align: start;
  }
`;

interface ItemProps {
  active: boolean;
}
export const Item = styled.div<ItemProps>`
  font-size: 22px;
  font-weight: 300;
  line-height: 38px;
  letter-spacing: 0.05em;
  color: rgba(4, 4, 48, 1);
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? "6px solid rgb(63, 94, 251)" : "0px"};
  transition: all 0.3s ease-in-out;
  padding-right: 100px;

  @media (max-width: 1440px) {
    font-size: 24px;
    padding-right: 50px;
    letter-spacing: 0.04em;
  }
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 900px) {
    display: flex;
    text-align: center;
    line-height: 25px;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media (max-width: 700px) {
    font-size: 16px;
    padding-right: 5px;
    padding-left: 5px;
    border-bottom: ${({ active }) => (active ? "5px solid #400186" : "0px")};
  }
`;

export const RightContent = styled.div`
  display: flex;

  max-width: 885px;
  width: 100%;
  height: fit-content;
  background: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 35px;
  transition: 0.5s;

  @media (max-width: 1200px) {
    padding: 50px;
  }
  @media (max-width: 900px) {
    width: 600px;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }

  h1 {
    font-weight: 300;
    font-size: 38px;
    line-height: 53px;
    letter-spacing: 0.05em;
    color: #1e1c1c;
    text-align: start;

    @media (max-width: 1200px) {
      font-size: 30px;
      letter-spacing: 0.04em;
      line-height: 28px;
    }
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 31px;
    color: #1e1c1c;
    letter-spacing: 0.05em;
    text-align: start;

    @media (max-width: 1200px) {
      font-size: 16px;
      letter-spacing: 0.04em;
      line-height: 28px;
    }
  }

  a {
    width: 100%;
    display: flex;
    text-decoration: none;

    button {
      width: fit-content;
      padding: 15px 35px;
      background: linear-gradient(
        270deg,
        rgba(4, 4, 48, 1) 54.69%,
        rgba(4, 4, 100, 1) 100%
      );
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 4px 12px;
      border: none;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      cursor: pointer;

      @media (max-width: 900px) {
        width: 200px;
        height: 50px;
        font-size: 18px;
      }
    }
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  .imgLeft {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    background: transparent;
    border-radius: 2px 2px 6px 2px;

    img {
      width: 100%;
      height: 100%;
      max-height: 150px;
      object-fit: cover;
      border-radius: 2px 2px 6px 2px;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  .textRight {
    display: flex;
    flex: 1;
    flex-flow: column;
    gap: 20px;
    @media (max-width: 700px) {
      gap: 16px;
    }
  }
`;
