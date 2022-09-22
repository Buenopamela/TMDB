import styled from "styled-components";

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  gap: 4rem;
  padding: 4rem;
  justify-content: center;

  @media (max-width: 560px) {
    grid-template-columns: 100%;
  }
`;
