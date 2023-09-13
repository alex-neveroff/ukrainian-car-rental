import { useDispatch, useSelector } from 'react-redux';
import { CarList, FilterForm, LoadMore } from 'components';
import { Container } from 'components/Layout/Layout.styled';
import { selectCars, selectPagination } from 'redux/adverts/advertsSelectors';
import { addFavorite } from 'redux/adverts/advertsSlice';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const isCars = Boolean(cars.length);
  const isLoadMore = useSelector(selectPagination);

  const dispatch = useDispatch();

  const handleFavorite = id => dispatch(addFavorite(id));

  return (
    <Container>
      <FilterForm />
      <section>
        {isCars && <CarList cars={cars} handleFavorite={handleFavorite} />}
        {isLoadMore && <LoadMore />}
      </section>
    </Container>
  );
};

export default Catalog;
