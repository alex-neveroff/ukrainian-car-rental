import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const SidebarStyled = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  min-height: 100vh;
  height: auto;
  background-color: ${colors.buttonBackground};
`;

const Logo = styled.img`
  width: 130px;
  margin: 0 auto 50px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MenuLink = styled(NavLink)`
  color: ${colors.textButton};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  transition: transform ${transitions.transition};

  &.active {
    text-decoration: underline;
  }

  &:not(.active):hover,
  &:not(.active):focus {
    transform: ${transitions.scale};
    outline: none;
  }
`;

export { SidebarStyled, Menu, MenuLink, Logo };
