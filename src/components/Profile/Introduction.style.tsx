import styled from '@emotion/styled'

export const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-right: 1rem;
  }
`

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-800);
  margin-bottom: var(--size-600);
  padding-left: 1.8rem;

  > h1 {
    max-width: none;
  }

  > p {
    width: fit-content;
    font-size: var(--size-400);
    margin-top: 15px;
    padding: 0.1rem;
    color: #6a7280;
  }

  @media screen and (max-width: 768px) {
    margin-top: var(--size-700);
    margin-bottom: var(--size-500);
    padding-left: 1rem;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 4rem 2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #9cbeca;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 2rem 1rem;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      fill: #9cbeca;
      margin-right: 1rem;
    }
  }
`