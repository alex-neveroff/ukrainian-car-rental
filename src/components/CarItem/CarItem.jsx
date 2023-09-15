import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  ButtonStyled,
  CarItemStyled,
  CarImage,
  CarPrice,
  CarTitle,
  CarTitleWrapper,
  HighlightedText,
  ImageWrapper,
} from './CarItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/adverts/advertsSelectors';
import { splitAddress, isPremium, digitSeparator } from 'helpers';
import { CarDetails, CarItemInfo, Modal } from 'components';
import { addFavorite, removeFavorite } from 'redux/adverts/advertsSlice';
import { useState } from 'react';

const CarItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img: carImg,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);
  const { city, country } = splitAddress(address);
  const isFavorite = favoriteCars.find(car => car.id === id);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const companyInfo = {
    city,
    country,
    rentalCompany,
    premium: isPremium(rentalPrice),
  };
  const carInfo = {
    type,
    make,
    mileage: digitSeparator(mileage),
    accessory: accessories[0],
  };

  return (
    <CarItemStyled>
      <ImageWrapper>
        <CarImage src={carImg} alt={`${make} ${model}`} />
        {isFavorite ? (
          <FaHeart className="filled-heart" onClick={toggleFavorites} />
        ) : (
          <FaRegHeart className="empty-heart" onClick={toggleFavorites} />
        )}
      </ImageWrapper>
      <CarTitleWrapper>
        <CarTitle>
          {`${make} `} <HighlightedText>{model}</HighlightedText> {`, ${year}`}
        </CarTitle>
        <CarPrice>{rentalPrice}</CarPrice>
      </CarTitleWrapper>
      <CarItemInfo info={companyInfo} />
      <CarItemInfo info={carInfo} />
      <ButtonStyled
        type="button"
        onClick={() => {
          setIsShowModal(true);
        }}
      >
        Learn more
      </ButtonStyled>
      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <CarDetails car={car} />
        </Modal>
      )}
    </CarItemStyled>
  );
};

export default CarItem;
