import { CarCard } from 'components';
import { CarListStyled } from './CarList.styled';

const CarList = ({ cars, handleFavorite }) => {
  return (
    <CarListStyled>
      {cars.map(car => (
        <CarCard key={car.id} car={car} handleFavorite={handleFavorite} />
      ))}
    </CarListStyled>
  );
};

export default CarList;
