import { Info, InfoItem } from './CarItemInfo.styled';

const CarItemInfo = ({ info }) => {
  return (
    <Info>
      {info.city && <InfoItem>{info.city}</InfoItem>}
      {info.country && <InfoItem>{info.country}</InfoItem>}
      {info.rentalCompany && <InfoItem>{info.rentalCompany}</InfoItem>}
      {info.premium && <InfoItem>{info.premium}</InfoItem>}
      {info.type && <InfoItem>{info.type}</InfoItem>}
      {info.make && <InfoItem>{info.make}</InfoItem>}
      {info.mileage && <InfoItem>{info.mileage}</InfoItem>}
      {info.accessories && <InfoItem>{info.accessories[0]}</InfoItem>}
    </Info>
  );
};

export default CarItemInfo;
