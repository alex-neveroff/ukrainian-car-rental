import { CarItem } from 'components';
import { CarListStyled } from './CarList.styled';

const CarList = ({ cars }) => {
  return (
    <CarListStyled>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </CarListStyled>
  );
};

export default CarList;
