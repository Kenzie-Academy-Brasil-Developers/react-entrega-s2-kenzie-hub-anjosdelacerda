import styled from "styled-components";

export const Glass = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  position: fixed;

  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 10;
`;

export const StyledModal = styled.form`
  display: flex;

  width: 23.063rem;
  height: 22.365rem;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  background: var(--cinzaFundo);
`;

export const StyledModalTop = styled.div`
  display: flex;

  width: 23.063rem;
  height: 3.125rem;

  padding: 12px 20px;

  border-radius: 4px 4px 0px 0px;

  align-items: center;
  justify-content: space-between;

  background: var(--cinzaMedio);
`;

export const SetPadding = styled.div`
  display: flex;
  padding: 20px;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;
`;

export const DivButtons = styled.div`
  display: flex;

  width: 20.25rem;
  height: 3rem;

  justify-content: space-between;
`;
