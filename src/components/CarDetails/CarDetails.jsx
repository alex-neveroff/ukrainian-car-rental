import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled,
  CarDescription,
  CarDetailsStyled,
  CarImage,
  CarTitle,
  HighlightedText,
  HighlightedTextConditions,
  RentalItem,
  RentalList,
  SubTitleAccessories,
  SubTitleRental,
} from './CarDetails.styled';
import { CarItemInfo } from 'components';
import { digitSeparator, splitAddress } from 'helpers';

const CarDetails = ({ car }) => {
  const {
    id,
    img: carImg,
    make,
    model,
    year,
    fuelConsumption,
    engineSize,
    description,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    functionalities,
    rentalConditions,
  } = car;
  const { city, country } = splitAddress(address);
  const carInfo = {
    city,
    country,
    id: `Id:  ${id}`,
    year: `Year: ${year}`,
    type: `Type: ${type}`,
  };
  const techInfo = {
    fuelConsumption: `Fuel Consumption: ${fuelConsumption}`,
    engineSize: `Engine Size: ${engineSize}`,
  };
  const accessoriesInfo = {
    accessories: [...accessories, ...functionalities],
  };
  const conditions = rentalConditions.split('\n');

  const conditionsList = conditions.map((condition, index) => {
    if (condition.startsWith('Minimum age:')) {
      const [label, age] = condition.split(':');
      return (
        <RentalItem key={index}>
          {label}: <HighlightedTextConditions>{age}</HighlightedTextConditions>
        </RentalItem>
      );
    } else {
      return <RentalItem key={index}>{condition}</RentalItem>;
    }
  });

  return (
    <CarDetailsStyled>
      <CarImage
        src={carImg}
        alt={`${make} ${model}`}
        width="447"
        height="268"
      />
      <CarTitle>
        {`${make} `} <HighlightedText>{model}</HighlightedText> {`, ${year}`}
      </CarTitle>
      <CarItemInfo info={carInfo} />
      <CarItemInfo info={techInfo} />
      <CarDescription>{description}</CarDescription>
      <SubTitleAccessories>
        Accessories and functionalities:
      </SubTitleAccessories>
      <CarItemInfo info={accessoriesInfo} />
      <SubTitleRental>Rental Conditions:</SubTitleRental>
      <RentalList>
        {conditionsList}
        <RentalItem>
          Mileage:{' '}
          <HighlightedTextConditions>
            {digitSeparator(mileage)}
          </HighlightedTextConditions>
        </RentalItem>
        <RentalItem>
          Price:{' '}
          <HighlightedTextConditions>{rentalPrice}</HighlightedTextConditions>
        </RentalItem>
      </RentalList>
      <ButtonStyled href="tel:+380730000000">Rental car</ButtonStyled>
    </CarDetailsStyled>
  );
};

CarDetails.propTypes = { car: PropTypes.object.isRequired };

export default CarDetails;
