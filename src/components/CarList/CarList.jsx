import { CarCard } from 'components';
import { CarListStyled } from './CarList.styled';

const CarList = ({ cars, handleFavoriteClick }) => {
  return (
    // <CarListStyled>
    //   {cars.map(car => (
    //     <CarCard
    //       key={car.id}
    //       car={car}
    //       handleFavoriteClick={handleFavoriteClick}
    //     />
    //   ))}
    // </CarListStyled>

    <CarListStyled>
      <CarCard />
    </CarListStyled>
  );
};

export default CarList;
