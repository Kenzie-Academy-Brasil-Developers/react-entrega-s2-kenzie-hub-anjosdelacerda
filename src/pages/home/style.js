import styled from "styled-components";

export const BoxAlign = styled.div`
  display: flex;

  width: 48.75rem;
  height: 26rem;

  /* background: var(--cinzaFundo); */
  border-radius: 4px;

  flex-direction: column;
  align-items: center;
`;

export const AsideMenu = styled.aside`
  display: flex;

  background: var(--pretoAbsoluto);
  width: 48.438rem;
  height: 2.063rem;
  border: 1px solid var(--pretoAbsoluto);

  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const BoxGray = styled.div`
  display: flex;

  width: 48.75rem;
  /* height: 26rem; */

  background: var(--cinzaFundo);
  border-radius: 4px;

  justify-content: center;
`;

export const ListStyled = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;

  width: 45.813rem;
  height: 23.063rem;
`;

export const TechStyled = styled.li`
  display: flex;

  width: 45.75rem;
  height: 4.063rem;

  background: var(--pretoAbsoluto);

  border-radius: 4px;

  justify-content: space-between;
  align-items: center;

  padding: 28px;

  font-weight: 700;
  font-size: 14.2123px;
  line-height: 24px;
`;

export const TechListDetails = styled.div`
  display: flex;

  width: 8rem;

  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;

  color: var(--cinzaClaro);
`;

export const NavBar = styled.div`
  display: flex;

  width: 100vw;
  height: 4.5rem;

  justify-content: space-around;
  align-items: center;
`;

export const Welcome = styled.div`
  display: flex;

  width: 100vw;
  height: 7.375rem;

  justify-content: space-around;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--cinzaClaro);
  }
`;

export const ButtonPlus = styled.button`
  display: flex;

  width: 2.031rem;
  height: 2rem;

  justify-content: center;
  align-items: center;

  color: var(--cinzaFonte);
  font-weight: 700;

  background: var(--cinzaMedio);
`;
