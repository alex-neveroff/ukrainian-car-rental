const { default: styled } = require('@emotion/styled');

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 18px;
  justify-content: center;
  margin-bottom: 50px;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #121417;
`;

const FormLabel = styled.label``;

const InputStyled = styled.input``;

const DatalistStyled = styled.datalist``;

const OptionStyled = styled.option``;

const InputGroupLabel = styled.label``;

const ButtonStyled = styled.button``;

export {
  FormStyled,
  SelectorWrapper,
  InputStyled,
  ButtonStyled,
  DatalistStyled,
  OptionStyled,
  InputGroupLabel,
  FormLabel,
};
