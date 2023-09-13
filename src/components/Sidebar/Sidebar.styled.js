import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const SidebarStyled = styled.aside`
  width: 240px;
  padding: 8px 0 50px 0;
  min-height: 100vh;
  height: auto;
  background-color: #3470ff;
`;

const Menu = styled.nav``;

const MenuLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-transform: uppercase;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  &.active {
    text-decoration: underline;
  }
`;

export { SidebarStyled, Menu, MenuLink };
