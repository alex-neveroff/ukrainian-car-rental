import { Info, InfoItem } from './CarItemInfo.styled';

const CarItemInfo = ({ info }) => {
  return (
    <Info>
      {info.city && <InfoItem>{info.city}</InfoItem>}
      {info.country && <InfoItem>{info.country}</InfoItem>}
      {info.rentalCompany && <InfoItem>{info.rentalCompany}</InfoItem>}
      {info.premium && <InfoItem>{info.premium}</InfoItem>}
      {info.id && <InfoItem>{info.id}</InfoItem>}
      {info.year && <InfoItem>{info.year}</InfoItem>}
      {info.type && <InfoItem>{info.type}</InfoItem>}
      {info.make && <InfoItem>{info.make}</InfoItem>}
      {info.mileage && <InfoItem>{info.mileage}</InfoItem>}
      {info.accessory && <InfoItem>{info.accessory}</InfoItem>}
      {info.fuelConsumption && <InfoItem>{info.fuelConsumption}</InfoItem>}
      {info.engineSize && <InfoItem>{info.engineSize}</InfoItem>},
      {info.accessories &&
        info.accessories.map((item, index) => (
          <InfoItem key={index}>{item}</InfoItem>
        ))}
      ,
    </Info>
  );
};

export default CarItemInfo;
