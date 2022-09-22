import React from "react";
import { Link } from "react-router-dom";
import {
  BtnLogin,
  ContainerBtn,
  Img,
  IndividualItem,
  Items,
  Navbar,
  NavMenu,
  NavMenuLinks
} from "./styles";

const Nav = () => {
  return (
    <>
      <Navbar>
        <NavMenu>
          <NavMenuLinks>
            <Link to="/">
              <Img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
              />
            </Link>
            <Items>
              <Link to="/">
                <div>
                  <IndividualItem>Movies</IndividualItem>
                </div>
              </Link>
              <Link to="/series">
                <div>
                <IndividualItem>TV Series</IndividualItem>
                </div>
              </Link>
              <Link to="/favorites">
                <div>
                <IndividualItem>Favorites</IndividualItem>
                </div>
              </Link>
            </Items>
          </NavMenuLinks>
          <Link to="/login">
          <ContainerBtn>
            <BtnLogin>Login</BtnLogin>
          </ContainerBtn>
          </Link>

          
        </NavMenu>
      </Navbar>
    </>
  );
};

export default Nav;
