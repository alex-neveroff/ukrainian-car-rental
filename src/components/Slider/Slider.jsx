import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { SliderStyled, Slide } from './Slider.styled';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = useSelector(selectCars);
  const carsImg = cars.map(car => car.img);
  const interval = 1000;

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
      <Slide
        src={carsImg[currentIndex]}
        alt={`Slide ${currentIndex}`}
        width="447"
        height="268"
      />
    </SliderStyled>
  );
};

export default Slider;
