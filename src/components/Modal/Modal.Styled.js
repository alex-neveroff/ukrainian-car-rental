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
  width: 541px;
  /* height: 752px; */
  /* max-height: 100vh; */
  border-radius: 24px;
  background-color: ${colors.mainBackground};
  overflow: hidden;
  padding: 40px;
`;

export { Overlay, ModalWindow };
