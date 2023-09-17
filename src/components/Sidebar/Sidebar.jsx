import { Menu, MenuLink, SidebarStyled, Logo } from './Sidebar.styled';
import logo from 'images/logo.png';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Logo src={logo} alt="Logo project" width="180" height="180" />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/catalog">Catalog</MenuLink>
        <MenuLink to="/favorites">Favorites</MenuLink>
      </Menu>
    </SidebarStyled>
  );
};

export default Sidebar;
