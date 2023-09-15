import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const AboutStyled = styled.section`
  padding-left: 128px;
  padding-right: 128px;
`;

const AboutHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: ${colors.textDescription};
  font-size: 36px;
  font-weight: 600;
`;

const SliderWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const AboutText = styled.p`
  color: ${colors.textDescription};
  font-size: 20px;
  font-weight: 500;
  flex: 1;
`;

const AboutLink = styled(NavLink)`
  color: ${colors.textLink};
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 600;

  transition: transform ${transitions.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;

export { AboutHeader, AboutText, SliderWrapper, AboutLink, AboutStyled };
