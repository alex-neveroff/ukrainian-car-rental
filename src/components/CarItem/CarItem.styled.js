import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const CarItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  border: 0 none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
  background: linear-gradient(
      180deg,
      ${colors.gradientStart},
      ${colors.gradientMiddle}
    ),
    ${colors.gradientEnd};

  .empty-heart {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    color: ${colors.iconEmpty};
    transition: transform ${transitions.transition};

    &:hover,
    &:focus {
      transform: scale(1.1);
      outline: none;
    }
  }
  .filled-heart {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    color: ${colors.iconFilled};
    transition: transform ${transitions.transition};

    &:hover,
    &:focus {
      transform: scale(1.2);
      outline: none;
    }
  }
`;

const CarImage = styled.img`
  height: 268px;
  object-fit: cover;
`;

const CarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CarTitle = styled.h2`
  color: ${colors.textDescription};
  font-size: 16px;
  font-weight: 500;
`;

const HighlightedText = styled.span`
  color: ${colors.textLink};
`;

const CarPrice = styled.p`
  color: ${colors.textDescription};
  font-size: 16px;
  font-weight: 500;
`;

const ButtonStyled = styled.button`
  width: 100%;
  padding: 12px 0;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  margin-top: auto;
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
  CarItemStyled,
  ImageWrapper,
  CarImage,
  CarTitleWrapper,
  CarTitle,
  HighlightedText,
  CarPrice,
  ButtonStyled,
};
