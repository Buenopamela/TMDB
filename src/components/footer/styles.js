import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  background-color: #0a3666;
  height: 5rem;
  position: absolute bottom 0;
`;

export const ContainerImg = styled.div`
margin-right: 1rem;

&:hover {
    cursor: pointer;
}
`;

export const Img = styled.img`
  width: 10rem;
`;
