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
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/adverts/advertsSelectors';
import { splitAddress, isPremium, digitSeparator } from 'helpers';
import { CarItemInfo } from 'components';

const CarItem = ({ car, handleFavorite }) => {
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

  const favoriteCars = useSelector(selectFavorites);
  const { city, country } = splitAddress(address);
  const isFavorite = favoriteCars.includes(id);

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
    accessories,
  };

  // const { showModal, onToggleModal } = useModalToggle();

  return (
    <CarItemStyled>
      <ImageWrapper>
        <CarImage src={carImg} alt={`${make} ${model}`} />
        {isFavorite ? (
          <FaHeart className="filled-heart" />
        ) : (
          <FaRegHeart className="empty-heart" />
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
      <ButtonStyled type="button">Learn more</ButtonStyled>

      {/* onClick={onToggleModal} */}
      {/* {showModal && <Modal car={car} onToggleModal={onToggleModal}></Modal>} */}
    </CarItemStyled>
  );
};

export default CarItem;
