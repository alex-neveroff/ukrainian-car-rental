import styled from '@emotion/styled';
import { colors } from 'variables/colors';

const LayoutStyled = styled.main`
  display: flex;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 150px;
  width: 100%;
  max-width: 1440px;
`;
const EmptySection = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 60%;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.textDescription};
`;

export { Container, LayoutStyled, EmptySection };
