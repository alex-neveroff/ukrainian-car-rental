import styled from '@emotion/styled';
import { colors } from 'variables/colors';

const LayoutStyled = styled.main`
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 0 150px 200px;
  width: 100%;
  max-width: 1440px;
  flex: 1;
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
