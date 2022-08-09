import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

export const FormContainer = styled.form`
  position: relative;
  margin-top: 2.25rem;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor2};
  align-items: center;
  width: 100%;
  padding: 0.4375rem;
  border-radius: 0.9375rem;
  box-shadow: ${({ theme }) =>
    theme.themeColor === 'light'
      ? '0 1rem 1.875rem -0.625rem rgba(70, 96, 187, 0.198567)'
      : '0'};

  @media only screen and (min-width: 37.5rem) {
    padding: 0.625rem;
  }
`

export const Input = styled.input`
  font-family: inherit;
  background-color: transparent;
  margin-right: 0.75rem;
  border: 0;
  padding-top: 0.8125rem;
  padding-bottom: 0.8125rem;
  width: 100%;
  cursor: pointer;
  font-size: 0.8125rem;
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

  @media only screen and (min-width: 37.5rem) {
    min-width: 1.5rem;
    min-height: 1.5rem;
    font-size: 1.125rem;
    margin-right: 0;
  }
`

export const Button = styled.button`
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.71875rem 0.75rem;
  background-color: var(--clr-primary);
  border: 0;
  border-radius: 0.625rem;
  color: var(--clr-neutral-100);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-primary-hover);
    transition: background-color 0.3s;
  }

  @media only screen and (min-width: 37.5rem) {
    font-size: 1rem;
    padding: 0.7187rem 1.5rem;
  }
`

export const Label = styled.label`
  & > svg {
    margin-left: 0.6875rem;
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
      fill: var(--clr-primary);
    }
  }

  @media only screen and (min-width: 37.5rem) {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1.5625rem;
      margin-right: 1.375rem;
    }
  }
`

export const Icon = styled.img`
  margin-left: 0.6875rem;
  margin-right: 0.5625rem;
  display: block;
  margin-top: 5px;
  min-width: 1.25rem;
  min-height: 1.25rem;

  @media only screen and (min-width: 37.5rem) {
    min-width: 1.5rem;
    min-height: 1.5rem;
    margin-left: 1.5625rem;
    margin-right: 1.375rem;
  }
`
export const IconSVG = styled(ReactSVG)`
  svg {
    margin-left: 0.6875rem;
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
      fill: var(--clr-primary);
    }
  }

  @media only screen and (min-width: 37.5rem) {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1.5625rem;
      margin-right: 1.375rem;
    }
  }
`

export const Text = styled.span`
  font-size: 0.875rem;
  color: #f74646;
  font-weight: 700;
  display: block;
  min-width: max-content;
  margin-right: 0.75rem;
  position: absolute;
  top: -1.5625rem;

  @media only screen and (min-width: 47.5rem) {
    position: relative;
    top: 0;
    font-size: 0.9375rem;
    margin-right: 0.75rem;
    display: block;
  }

  @media only screen and (min-width: 56.25rem) {
    margin-right: 1.5rem;
  }
`
