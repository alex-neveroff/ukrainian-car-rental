import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonStyled,
  DatalistStyled,
  FormLabel,
  FormStyled,
  InputGroupLabel,
  InputStyled,
  OptionStyled,
  SelectorWrapper,
} from './FilterForm.styled';
import { selectBrands, selectPriceRange } from 'redux/adverts/advertsSelectors';

const FilterForm = () => {
  const dispatch = useDispatch();
  const brandList = useSelector(selectBrands);
  const priceList = useSelector(selectPriceRange);
  const [carBrand, setCarBrand] = useState('');
  const [carPrice, setCarPrice] = useState('');

  const [milliageFrom, setMilliageFrom] = useState('');
  const [milliageTo, setMilliageTo] = useState('');

  return (
    <FormStyled>
      <SelectorWrapper>
        <FormLabel htmlFor="carSelector">Car brand </FormLabel>
        <InputStyled
          list="brands"
          placeholder="Enter the text"
          name="carBrand"
          id="carSelector"
          value={carBrand}
          autoComplete="off"
          onChange={event => {
            setCarBrand(event.target.value);
          }}
        />
        <DatalistStyled id="brands">
          {brandList.map((brand, index) => (
            <OptionStyled key={index}>{brand}</OptionStyled>
          ))}
        </DatalistStyled>
      </SelectorWrapper>
      <SelectorWrapper>
        <FormLabel htmlFor="priceSelector">Price / 1 hour</FormLabel>
        <InputStyled
          list="prices"
          placeholder="To $"
          name="carPrice"
          id="priceSelector"
          value={carPrice}
          autoComplete="off"
          onChange={event => {
            setCarPrice(event.target.value);
          }}
        />
        <DatalistStyled id="prices">
          {priceList.map((price, index) => (
            <OptionStyled key={index}>{price}</OptionStyled>
          ))}
        </DatalistStyled>
      </SelectorWrapper>
      <SelectorWrapper role="group" aria-labelledby="mileages">
        <InputGroupLabel id="mileages">Сar mileage / km</InputGroupLabel>
        <>
          <InputStyled
            className="milliageFrom"
            placeholder="From"
            type="text"
            name="milliageFrom"
            value={milliageFrom}
            autoComplete="off"
            onChange={event => {
              setMilliageFrom(event.target.value);
            }}
          />
          <InputStyled
            className="milliageTo"
            placeholder="To"
            type="text"
            name="milliageTo"
            value={milliageTo}
            autoComplete="off"
            onChange={event => {
              milliageTo(event.target.value);
            }}
          />
        </>
      </SelectorWrapper>

      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

export default FilterForm;
