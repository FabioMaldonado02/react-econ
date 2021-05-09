import React from "react";
import { Nav, NavMenu, NavCart, NavLink, NavBtn } from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink>
          <h1>NavBar</h1>
        </NavLink>
        <NavMenu>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <NavCart />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
