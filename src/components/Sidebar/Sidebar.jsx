import { Menu, MenuLink, SidebarStyled } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/catalog">Catalog</MenuLink>
        <MenuLink to="/favorites">Favorites</MenuLink>
      </Menu>
    </SidebarStyled>
  );
};

export default Sidebar;
