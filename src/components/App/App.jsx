import { Layout } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { fetchAdverts } from 'redux/operations';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
