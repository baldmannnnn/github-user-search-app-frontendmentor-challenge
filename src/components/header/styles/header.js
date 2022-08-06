import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: hsla(220, 18%, 16%, 1);
`

export const Text = styled.p`
  font-size: 13px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--clr-accent-100);
`

export const Btn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const Icon = styled.img`
  min-width: 20px;
  min-height: 20px;
  color: var(--clr-accent-100);
  align-self: baseline;
  margin-top: 3px;
`
