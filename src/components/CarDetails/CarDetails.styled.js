import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const CarDetailsStyled = styled.div``;

const CarImage = styled.img``;

const CarTitle = styled.h2`
  color: ${colors.textDescription};
  font-size: 16px;
  font-weight: 500;
`;

const HighlightedText = styled.span`
  color: ${colors.textLink};
`;

const CarDescription = styled.p``;

const SubTitle = styled.h3``;

const RentalWrapper = styled.div``;

const StyledButton = styled.a`
  cursor: pointer;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
`;

export {
  CarDetailsStyled,
  CarImage,
  CarTitle,
  HighlightedText,
  CarDescription,
  SubTitle,
  RentalWrapper,
  StyledButton,
};
