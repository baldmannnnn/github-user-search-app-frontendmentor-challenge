import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  margin-top: 50px;
  font-size: 0.75rem;
  text-align: center;
  width: 100%;
`

export const Link = styled.a`
  display: inline-block;
  color: hsl(228, 45%, 44%);
  font-family: inherit;
  /* font-size: inherit; */
  font-weight: 700;

  transition: color 0.1s, transform 0.1s;
  &:hover {
    transform: scale(1.01);
    color: hsl(228, 70%, 44%);
  }

  &:active {
    transform: scale(0.95);
  }

  @media only screen and (min-width: 37.5rem) {
    font-size: 14px;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.accentColor1};

  @media only screen and (min-width: 37.5rem) {
    font-size: 14px;
  }
`
