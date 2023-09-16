import { CarItem } from 'components';
import { CarListStyled } from './CarList.styled';

const CarList = ({ cars }) => {
  const renderedCarIds = [];
  return (
    <CarListStyled>
      {cars.map(car => {
        if (renderedCarIds.includes(car.id)) {
          return;
        }
        renderedCarIds.push(car.id);
        return <CarItem key={car.id} car={car} />;
      })}
    </CarListStyled>
  );
};

export default CarList;
