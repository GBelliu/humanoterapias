import styled from "styled-components";

export const Container = styled.div`

  .spinner {
    height: 24px;

    svg {
      fill: #fff;
    }
  }

  .spinner_0XTQ {
    transform-origin: center;
    animation: spinner_y6GP 0.75s linear infinite;
  }
  @keyframes spinner_y6GP {
    100% {
      transform: rotate(360deg);
    }
  }
`;
