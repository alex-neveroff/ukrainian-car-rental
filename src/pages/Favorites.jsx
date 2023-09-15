import { CarList, FilterForm, LoadMore } from 'components';
import { Container, EmptySection } from 'components/Layout/Layout.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/adverts/advertsSelectors';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <Container>
      <FilterForm />
      <section>
        {favoriteCars.length > 0 ? (
          <CarList cars={favoriteCars} />
        ) : (
          <EmptySection>
            This tab is for your favorite cars. When you like one of them, it
            will appear here. Choose your car right now!
          </EmptySection>
        )}
      </section>
    </Container>
  );
};

export default Favorites;
