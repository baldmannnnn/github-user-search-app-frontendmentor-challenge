import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

export const FormContainer = styled.form`
  margin-top: 36px;
  display: flex;
  /* justify-content: flex-start; */
  background-color: ${({ theme }) => theme.backgroundColor2};
  align-items: center;
  width: 100%;
  padding: 7px;
  border-radius: 15px;
  box-shadow: ${({ theme }) =>
    theme.themeColor === 'light'
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : '0'};

  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
`

export const Input = styled.input`
  font-family: inherit;
  background-color: transparent;
  margin-right: auto;
  border: 0;
  padding-top: 13px;
  padding-bottom: 13px;
  width: 100%;
  cursor: pointer;
  font-size: 13px;
  color: ${({ theme }) =>
    theme.themeColor === 'light'
      ? 'hsla(220, 18%, 16%, 1)'
      : theme.secondaryColor};
  outline: 0;
  caret-color: var(--clr-primary);

  &::placeholder {
    color: ${({ theme }) => theme.accentColor1};
    letter-spacing: -0.5px;
  }

  @media only screen and (min-width: 600px) {
    min-width: 24px;
    min-height: 24px;
    font-size: 18px;
    margin-right: 0;
  }
`

export const Button = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  padding: 11.5px 12px;
  background-color: var(--clr-primary);
  border: 0;
  border-radius: 10px;
  color: var(--clr-neutral-100);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-primary-hover);
    transition: background-color 0.3s;
  }

  @media only screen and (min-width: 600px) {
    font-size: 16px;
    padding: 11.5px 24px;
  }
`

export const Label = styled.label``

export const Icon = styled.img`
  margin-left: 11px;
  margin-right: 9px;
  display: block;
  margin-top: 5px;
  min-width: 20px;
  min-height: 20px;

  @media only screen and (min-width: 600px) {
    min-width: 24px;
    min-height: 24px;
    margin-left: 25px;
    margin-right: 22px;
  }
`
export const IconSVG = styled(ReactSVG)`
  svg {
    margin-left: 11px;
    margin-right: 9px;
    display: block;
    margin-top: 2px;

    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `}
    path {
      /* ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `} */
      fill: var(--clr-primary);
    }
  }
  /* margin-left: 11px;
  margin-right: 9px;
  display: block;
  margin-top: 5px;
  min-width: 20px;
  min-height: 20px; */

  @media only screen and (min-width: 600px) {
    svg {
      width: 24px;
      height: 24px;
      margin-left: 25px;
      margin-right: 22px;
    }
  }
`

export const Text = styled.span`
  font-size: 15px;
  color: #f74646;
  font-weight: 700;
  display: none;
  min-width: max-content;

  @media only screen and (min-width: 800px) {
    margin-right: 12px;
    display: block;
  }

  @media only screen and (min-width: 900px) {
    margin-right: 24px;
  }
`
