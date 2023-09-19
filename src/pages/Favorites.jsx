import { CarList, FilterForm, LoadMore } from 'components';
import { Container, EmptySection } from 'components/Layout/Layout.styled';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from 'redux/slice';
import {
  selectFavorites,
  selectFavoritesShown,
  selectPage,
  selectPerPage,
} from 'redux/selectors';

const Favorites = () => {
  const dispatch = useDispatch();
  const allFavoriteCars = useSelector(selectFavorites);
  const favoriteCars = useSelector(selectFavoritesShown);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const totalPages = Math.ceil(favoriteCars.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  useEffect(() => {
    setFilteredCars(favoriteCars.slice(0, endIndex));
    if (totalPages === page || totalPages === 0) {
      setIsShowLoadMore(false);
    } else {
      setIsShowLoadMore(true);
    }
  }, [favoriteCars, page, endIndex, totalPages]);

  useEffect(() => {
    if (allFavoriteCars.length > 0) {
      if (favoriteCars.length === 0) {
        Notify.success(`Founded nothing`);
      } else if (favoriteCars.length === 1) {
        Notify.success(`Founded just one car`);
      } else {
        Notify.success(`Founded ${favoriteCars.length} cars`);
      }
    }
  }, [favoriteCars]);

  return (
    <Container>
      <FilterForm />
      <section>
        {allFavoriteCars.length > 0 && <CarList cars={filteredCars} />}
        {allFavoriteCars.length === 0 && (
          <EmptySection>
            This tab is for your favorite cars. When you like one of them, it
            will appear here. Choose your car right now!
          </EmptySection>
        )}
        {allFavoriteCars.length > 0 && favoriteCars.length === 0 && (
          <EmptySection>
            No cars were found for this filter. Try a different filter or select
            empty rows to see all your favorites.
          </EmptySection>
        )}

        {isShowLoadMore && <LoadMore />}
      </section>
    </Container>
  );
};

export default Favorites;
