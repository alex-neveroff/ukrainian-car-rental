import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const LoadMoreStyled = styled.button`
  display: block;
  margin: 100px auto 0 auto;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.buttonBackground};
  transition: color ${transitions.transition};
  &:hover,
  &:focus {
    color: ${colors.buttonHover};
    outline: none;
    border: none;
  }
`;

export { LoadMoreStyled };
