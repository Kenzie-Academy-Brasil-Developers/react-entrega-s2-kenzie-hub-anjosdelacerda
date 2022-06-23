import styled from "styled-components";

export const Content = styled.button`
  background: ${(props) => (props.rosaSchema ? "#ff577f" : "#868e96")};
  color: var(--cinzaFonte);

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0rem 1.396rem;

  gap: 0.634rem;

  width: 20.25rem;
  height: 3rem;

  border: 1px solid ${(props) => (props.rosaSchema ? "#ff577f" : "#868e96")};
  border-radius: 4.06066px;

  cursor: pointer;
`;

export const MiniContent = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0px 16.2426px;
  gap: 10.15px;

  border-radius: 4px;

  background: var(--cinzaFundo);
  color: var(--cinzaFonte);

  width: 4.218rem;
  height: 2.507rem;

  cursor: pointer;
`;
