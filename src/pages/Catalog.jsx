import { useSelector } from 'react-redux';
import { CarList, FilterForm, LoadMore } from 'components';
import { Container } from 'components/Layout/Layout.styled';
import { selectCars, selectPagination } from 'redux/adverts/advertsSelectors';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const isLoadMore = useSelector(selectPagination);

  return (
    <Container>
      <FilterForm />
      <section>
        {cars.length > 0 && <CarList cars={cars} />}
        {isLoadMore && <LoadMore />}
      </section>
    </Container>
  );
};

export default Catalog;
