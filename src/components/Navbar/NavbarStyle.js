import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = styled.nav`
  background: #d3d3d3;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.hover {
    transition: all 0.2s ease-in-out;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
export const NavCart = styled(FaShoppingCart)`
  display: block;
  position: absolute;
  margin-right: 24px;
  cursor: pointer;
`;
