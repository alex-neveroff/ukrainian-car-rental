import { Layout } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { fetchAdverts } from 'redux/adverts/advertsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from 'redux/adverts/advertsSelectors';

const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites'));

function App() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

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
