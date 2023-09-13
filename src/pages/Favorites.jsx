import { CarList, FilterForm, LoadMore } from 'components';
import { Container } from 'components/Layout/Layout.styled';

const Favorites = () => {
  return (
    <Container>
      <FilterForm />
      <section>
        <CarList />
        <LoadMore />
      </section>
    </Container>
  );
};

export default Favorites;
