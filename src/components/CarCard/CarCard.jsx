import { CarCardStyled } from './CarCard.styled';

// const CarCard = ({ handleFavorite }) => {
//   return (
//     <CarCardStyled handleFavorite={handleFavorite}>Car item</CarCardStyled>
//   );
// };

const CarCard = ({ car, handleFavorite }) => {
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
    favorite,
    mileage,
  } = car;

  // const { showModal, onToggleModal } = useModalToggle();

  return (
    <>
      <img src={carImg} alt={`${make} ${model}`} />
      <p>
        {make} {model}
      </p>
      <p>{rentalPrice}</p>
      <p>{year}</p>
      <p>{accessories}</p>
      <p>{rentalCompany}</p>
      <p>{address}</p>
      <p>{mileage}</p>

      {/* <StyledButton type="button" onClick={onToggleModal}>
          Learn more
        </StyledButton> */}
      <button type="button">Learn more</button>

      {/* {showModal && <Modal car={car} onToggleModal={onToggleModal}></Modal>} */}
    </>
  );
};

export default CarCard;
