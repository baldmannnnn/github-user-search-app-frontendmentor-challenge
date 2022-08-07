import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 600px) {
    margin-top: 0;
    margin-top: 140px;
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

  &:hover {
    color: ${({ theme }) =>
      theme.themeColor === 'light'
        ? 'var(--clr-accent-600)'
        : 'hsl(222, 44%, 70%)'};
  }
`

export const Text = styled.p`
  font-size: 13px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryColor};
  &:hover {
    color: ${({ theme }) =>
      theme.themeColor === 'light'
        ? 'var(--clr-accent-600)'
        : 'hsl(222, 44%, 70%)'};
  }
`

export const Btn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  gap: 16px;
`

export const Icon = styled.img`
  min-width: 20px;
  min-height: 20px;
  color: var(--clr-accent-100);
  align-self: baseline;
  /* margin-top: 3px; */
`
