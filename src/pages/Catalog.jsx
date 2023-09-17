import { useSelector } from 'react-redux';
import { CarList, FilterForm, LoadMore } from 'components';
import { Container } from 'components/Layout/Layout.styled';
import { selectCars, selectisShowLoadMore } from 'redux/selectors';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const isShowLoadMore = useSelector(selectisShowLoadMore);

  return (
    <Container>
      <FilterForm />
      <section>
        {cars.length > 0 && <CarList cars={cars} />}
        {isShowLoadMore && <LoadMore />}
      </section>
    </Container>
  );
};

export default Catalog;
