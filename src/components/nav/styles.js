import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  color: #fff;
  height: 3.5rem;
  z-index: 10;

  @media (max-width: 560px){
   flex-direction: column;
  }
`;

export const NavMenu = styled.div`
  background-color: #0a3666; // #124a87
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0 8px 6px -6px black;
`;

export const NavMenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-right: 40%;

`;

export const Img = styled.img`
  width: 10rem;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 2.5rem;

  @media (max-width: 560px){
  overflow: hidden;
  }


`;

export const IndividualItem = styled.p`

transition: all .2s ease-in-out;
  opacity: 0.8;


  &:hover {
    cursor:pointer;
    opacity: 1.8;
    transform: scale(1.2);
  }

`;

export const ContainerBtn = styled.div`
  display: flex;
  transition: all .2s ease-in-out;

  &:hover {
    cursor:pointer;
    opacity: 1.8;
    transform: scale(1.1);
  }
`;

export const BtnLogin = styled.button`
    margin-top: 0.6rem;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 35px;
    padding: 8px 26px;
    border: none;
    background: linear-gradient(to right, rgba(144, 206, 161, 1) 0%, rgba(1, 180, 228, 1) 100%);
    border-radius: 30px;
    color: #fff;
    font-weight: bold;
  
    transition: all .2s ease-in-out;

&:hover {
  cursor:pointer;
  opacity: 1.8;
  transform: scale(1.1);
}

`;