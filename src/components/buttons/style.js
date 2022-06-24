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

export const IconContent = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 1.234rem;
  height: 0.95rem;

  background: var(--pretoAbsoluto);

  img {
    /* width: 1rem;
    height: 0.5rem; */
  }
`;

export const ContentForEdit = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0rem 1.396rem;

  gap: 0.634rem;

  width: 12.75rem;
  height: 3rem;
  color: var(--cinzaFonte);
  background: var(--rosa);
  border: solid 1.2128px var(--rosa);
  border-radius: 4px;

  border-radius: 4px;
  cursor: pointer;
`;

export const ContentForExcluir = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0rem 1.396rem;

  gap: 0.634rem;

  width: 6.125rem;
  height: 3rem;
  color: var(--cinzaFonte);
  background: var(--cinzaClaro);
  border: solid 1.2128px var(--cinzaClaro);
  border-radius: 4px;

  border-radius: 4px;
  cursor: pointer;
`;
