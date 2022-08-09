import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const HeaderContainer = styled.div`
  padding-top: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 600px) {
    margin-top: 0;
    padding-top: 140px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: min-content;
`

export const Logo = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.themeColor === 'light'
      ? 'hsla(220, 18%, 16%, 1)'
      : theme.secondaryColor};
`

export const Text = styled.span`
  font-size: 13px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 2px;
`

export const Btn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 700;
  gap: 16px;

  &:hover > span {
    color: ${({ theme }) =>
      theme.themeColor === 'light'
        ? 'var(--clr-accent-600)'
        : 'hsl(222, 44%, 70%)'};
  }

  &:hover > svg {
    path {
      fill: ${({ theme }) =>
        theme.themeColor === 'light'
          ? 'var(--clr-accent-600)'
          : 'hsl(222, 44%, 70%)'};
    }
  }
`

export const Icon = styled(ReactSVG)`
  /* svg {
    margin: 5px 0 0 0;
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.accentColor1};
    }
  } */
  /* svg:hover {
    path {
      fill: ${({ theme }) =>
    theme.themeColor === 'light'
      ? 'var(--clr-accent-600)'
      : 'hsl(222, 44%, 70%)'};
      transition: color 0.3s ease;
    }
  } */
`

// export const Icon = styled.img`
//   min-width: 20px;
//   min-height: 20px;
//   color: red;
//   align-self: baseline;
// `
