import styled from '@emotion/styled';
import { transitions } from 'variables/transitions';
import { colors } from 'variables/colors';

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  margin-bottom: 50px;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.textDescription};
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${colors.textFilter};
`;

const MileageWrapper = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  color: ${colors.textDescription};
  background-color: ${colors.inputBackground};

  &:focus {
    border: none;
    outline: none;
  }
`;

const InputFromStyled = styled(InputStyled)`
  padding-left: 71px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid ${colors.inputBorder};
`;
const InputToStyled = styled(InputStyled)`
  padding-left: 48px;
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid ${colors.inputBorder};
`;

const InputTextStyled = styled.span`
  top: 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  position: absolute;
`;

const InputTextFrom = styled(InputTextStyled)`
  left: 24px;
`;

const InputTextTo = styled(InputTextStyled)`
  left: 184px;
`;

const ButtonStyled = styled.button`
  height: 44px;
  width: 136px;
  border-radius: 12px;
  background-color: ${colors.buttonBackground};
  color: ${colors.textButton};
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color ${transitions.transition};

  &:hover,
  &:focus {
    background-color: ${colors.buttonHover};
    outline: none;
  }
`;

export {
  FormStyled,
  SelectorWrapper,
  InputStyled,
  ButtonStyled,
  MileageWrapper,
  FormLabel,
  InputTextFrom,
  InputTextTo,
  InputToStyled,
  InputFromStyled,
};
