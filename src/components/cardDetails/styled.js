import styled from "styled-components";

export const ContainerLargeImg = styled.div`
   
  background-repeat: no-repeat;
  background-position: center;
  background-size : cover;
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 0.2s ease-in-out;
  opacity: 1.8;

`;

export const ImgDetails = styled.img`
  border-radius: 1rem;
  background-color: azure;
  /* margin: 1.5rem; */
  margin-top: 8rem;
  max-width: 300px;
  height: 500px;


  @media (max-width: 560px) {
    width: 90%;
    height: auto;
  }
`;

export const ContainerTextDetails = styled.div`
  /* background-color: white ;
  opacity: 0.5; */
  margin: 1.5rem;
  margin-top: 9rem;
  max-width: 40rem;
  font-size: .5rem;
  line-height: 2.1;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Overview = styled.p`
  font-size: 1.5rem;
`;

export const ExtraDetails = styled.div`
  display: flex;
  margin-top: 3rem;
`;
export const Genres = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  width: 20rem;
  justify-content: space-evenly;
  margin-left: -1rem;
`;
export const Runtime = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  width: 10rem;
  justify-content: space-evenly;
`;

