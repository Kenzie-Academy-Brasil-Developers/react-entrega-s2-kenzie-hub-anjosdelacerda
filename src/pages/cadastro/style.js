import styled from "styled-components";

export const CadastroStyle = styled.form`
  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 2.625rem 1.375rem;
  gap: 1.375rem;

  max-width: 23.063rem;
  max-height: 55.699rem;

  background: var(--cinzaFundo);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: var(--cinzaFonte);

  font-family: "Inter", serif;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--cinzaFonte);
  }

  span {
    font-size: 10px;
    line-height: 26px;
  }
`;

export const AlignInput = styled.div`
  display: flex;

  width: 20.313rem;
  height: 4.375rem;

  flex-direction: column;
  justify-content: space-around;

  label {
    display: flex;
    font-size: 12px;
    font-weight: 400;

    width: 125px;
  }

  input,
  select {
    display: flex;

    width: 20.621rem;
    height: 3rem;

    background: var(--cinzaMedio);
    border: 1px solid var(--cinzaFonte);
    border-radius: 4px;

    padding: 5px 5px;

    color: var(--cinzaFonte);
  }
`;

export const MiniBox = styled.div`
  display: flex;
  width: 23.063rem;
  height: 5.7rem;

  justify-content: space-between;
  align-items: center;
`;
