import styled from '@emotion/styled';
import { colors } from 'variables/colors';

const Info = styled.ul`
  display: flex;
  font-size: 12px;
  color: ${colors.textParams};
  margin-bottom: 4px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    margin-left: 6px;
    margin-right: 6px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export { Info, InfoItem };
