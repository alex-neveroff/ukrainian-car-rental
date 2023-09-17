import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { SliderStyled, Slide } from './Slider.styled';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = useSelector(selectCars);
  const carsImg = cars.map(car => car.img);
  const interval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carsImg.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [carsImg, interval]);

  return (
    <SliderStyled>
      <Slide src={carsImg[currentIndex]} alt={`Slide ${currentIndex}`} />
    </SliderStyled>
  );
};

export default Slider;
