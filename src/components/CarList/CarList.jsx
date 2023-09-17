import PropTypes from 'prop-types';
import { CarItem } from 'components';
import { CarListStyled } from './CarList.styled';

const CarList = ({ cars }) => {
  return (
    <CarListStyled>
      {cars.map(car => {
        return <CarItem key={car.id} car={car} />;
      })}
    </CarListStyled>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarList;
