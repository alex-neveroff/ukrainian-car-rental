const { default: styled } = require('@emotion/styled');

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
  color: #121417;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #8a8a89;
`;

const MileageWrapper = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  background-color: #f7f7fb;
  font-size: 18px;
  font-weight: 500;

  &:focus {
    border: none;
    outline: none;
  }
`;

const InputFromStyled = styled(InputStyled)`
  padding-left: 69px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

const InputToStyled = styled(InputStyled)`
  padding-left: 48px;
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);
`;

const ButtonStyled = styled.button`
  height: 44px;
  width: 136px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const StyledSpanFrom = styled.span`
  top: 13px;
  left: 24px;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
`;

const StyledSpanTo = styled.span`
  top: 13px;
  left: 184px;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
`;

export {
  FormStyled,
  SelectorWrapper,
  InputStyled,
  ButtonStyled,
  MileageWrapper,
  FormLabel,
  StyledSpanFrom,
  StyledSpanTo,
  InputToStyled,
  InputFromStyled,
};
