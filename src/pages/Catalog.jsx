import { CarList, FilterForm, LoadMore } from 'components';
import { Container } from 'components/Layout/Layout.styled';

const Catalog = () => {
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

export default Catalog;
