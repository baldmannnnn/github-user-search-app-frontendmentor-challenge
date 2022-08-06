import styled from 'styled-components'
export const FormContainer = styled.form`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  width: 100%;
  padding: 7px;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  background-color: var(--clr-neutral-100);

  @media only screen and (min-width: 768px) {
    padding: 10px;
  }
`

export const Input = styled.input`
  font-family: inherit;
  margin-right: auto;
  border: 0;
  padding-top: 13px;
  padding-bottom: 13px;
  width: 100%;
  cursor: pointer;
  font-size: 13px;
  color: hsla(220, 18%, 16%, 1);
  outline: 0;
  caret-color: var(--clr-primary);

  &::placeholder {
    color: var(--clr-accent-100);
    letter-spacing: -0.5px;
  }

  @media only screen and (min-width: 768px) {
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

  @media only screen and (min-width: 768px) {
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
  /* width: 100%; */

  @media only screen and (min-width: 768px) {
    min-width: 24px;
    min-height: 24px;
    margin-left: 25px;
    margin-right: 22px;
  }
`

export const Text = styled.span`
  font-size: 15px;
  color: #f74646;
  font-weight: 700;
  display: block;
  min-width: max-content;

  @media only screen and (min-width: 550px) {
    margin-right: 12px;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 24px;
  }
`
