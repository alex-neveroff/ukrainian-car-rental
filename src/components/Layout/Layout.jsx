import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader, Sidebar } from 'components';
import { LayoutStyled } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutStyled>
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};

export default Layout;
