import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import {
  ButtonStyled,
  CarItemStyled,
  CarImage,
  CarPrice,
  CarTitle,
  CarTitleWrapper,
  HighlightedText,
  ImageWrapper,
  HeartButton,
  CloseButton,
} from './CarItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { splitAddress, isPremium, digitSeparator } from 'helpers';
import { CarDetails, CarItemInfo, Modal } from 'components';
import { addFavorite, removeFavorite } from 'redux/slice';
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

  if (isShowModal) {
    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
  }

  return (
    <CarItemStyled>
      <ImageWrapper>
        <CarImage src={carImg} alt={`${make} ${model}`} />
        <HeartButton type="button" onClick={toggleFavorites}>
          {isFavorite ? (
            <FaHeart className="filled-heart" />
          ) : (
            <FaRegHeart className="empty-heart" />
          )}
        </HeartButton>
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
          <CloseButton type="button" onClick={() => setIsShowModal(false)}>
            <RxCross1 className="close-icon" />
          </CloseButton>
        </Modal>
      )}
    </CarItemStyled>
  );
};

export default CarItem;
