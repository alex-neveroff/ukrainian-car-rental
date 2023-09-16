import styled from '@emotion/styled';
import { colors } from 'variables/colors';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: ${colors.overlayColor};
`;

const ModalWindow = styled.div`
  position: relative;
  width: 541px;
  border-radius: 24px;
  overflow: hidden;
  background-color: ${colors.mainBackground};
`;

export { Overlay, ModalWindow };
