import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1.8;
    transform: scale(1.2);
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;


export const Img = styled.img`
  border-radius: 1rem;
  background-color: azure;
  width: 230px;
  height: 345px;

  @media (max-width: 560px) {
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
`;
