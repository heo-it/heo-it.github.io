import styled from '@emotion/styled'
import Container from './Container.style'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: linear-gradient(to left, #6868ac, #e9435e, #ecc371);
  padding-top: 0.6rem;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const HeaderWrapper = styled(Container)`
  display: flex;
  width: 55rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
`;

export const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: var(--size-300);
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  position: static;
  background: transparent;
  backdrop-filter: unset;
`;

export const StyledNavListItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  height: 3.5rem;
  width: 3rem;
  margin: 0 0 0 var(--size-400);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 2.5rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
  }
`;