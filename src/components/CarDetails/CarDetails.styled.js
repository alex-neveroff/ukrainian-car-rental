import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const CarDetailsStyled = styled.div`
  padding: 40px;
`;

const CarImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  background-color: ${colors.gradientEnd};
`;

const CarTitle = styled.h2`
  color: ${colors.textDescription};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

const HighlightedText = styled.span`
  color: ${colors.textLink};
`;

const CarDescription = styled.p`
  font-size: 14px;
  line-height: 1.43;
  margin-top: 14px;

  color: ${colors.textDescription};
`;

const SubTitle = styled.h3`
  color: ${colors.textDescription};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const RentalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  padding-left: 14px;
  margin-bottom: 32px;
`;

const ButtonStyled = styled.a`
  display: block;
  padding: 12px 50px;
  width: fit-content;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  background-color: ${colors.buttonBackground};
  color: ${colors.textButton};
  transition: background-color ${transitions.transition};

  &:hover,
  &:focus {
    background-color: ${colors.buttonHover};
    outline: none;
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
  ButtonStyled,
};
