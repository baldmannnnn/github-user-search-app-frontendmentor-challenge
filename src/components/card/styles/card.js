import styled from 'styled-components/macro'
import { ReactSVG } from 'react-svg'

export const CardContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 0.9375rem;
  box-shadow: ${({ theme }) =>
    theme.themeColor === 'light'
      ? '0px 1rem 1.875rem -.625rem rgba(70, 96, 187, 0.198567)'
      : 'none'};
  padding: 2rem 1.5rem 3rem;
  display: grid;
  grid-template-areas:
    'avatar profile profile'
    'bio bio bio'
    'info info info'
    'social social social';
  grid-template-columns: auto 1fr 1fr;
  column-gap: 1.125rem;
  row-gap: 1.125rem;

  @media only screen and (min-width: 37.5rem) {
    margin-top: 1.5rem;
    grid-template-areas:
      'avatar profile profile'
      'bio bio bio'
      'info info info'
      ' social social social';
    column-gap: 2.5rem;
    padding: 2.5rem;
  }

  @media only screen and (min-width: 56.25rem) {
    grid-template-areas:
      'avatar profile profile'
      'avatar bio bio'
      '. info info'
      '. social social';
  }
`

export const Info = styled.div`
  display: grid;
  grid-area: profile;
  display: grid;
  align-content: space-evenly;

  @media only screen and (min-width: 56.25rem) {
    grid-template-columns: 2fr auto;
    align-items: center;
  }
`

export const Heading1 = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.themeColor === 'light' ? theme.accentColor2 : theme.accentColor1};
  line-height: 1.481rem;

  @media only screen and (min-width: 37.5rem) {
    font-size: 1.625rem;
    line-height: 2.4375rem;
  }

  @media only screen and (min-width: 56.25rem) {
    grid-column: 1/1;
  }
`

export const Heading2 = styled.h2`
  color: var(--clr-primary);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.2rem;

  @media only screen and (min-width: 37.5rem) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media only screen and (min-width: 56.25rem) {
    grid-column: 1/1;
  }
`

export const Heading3 = styled.h3`
  font-size: 0.8125rem;
  line-height: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 0;

  @media only screen and (min-width: 37.5rem) {
    font-size: 0.9375rem;
  }

  @media only screen and (min-width: 56.25rem) {
    grid-column: 2/-1;
    grid-row: 1/1;
  }
`

export const Header = styled.div`
  grid-area: avatar;
`

export const Image = styled.img`
  display: block;
  width: 4.375rem;
  border-radius: 50%;

  @media only screen and (min-width: 37.5rem) {
    width: 7.3125rem;
    margin-bottom: 4px;
  }
`

export const Text = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ unavailable }) => (unavailable ? '0.5' : '1')};
`

export const Paragraph = styled.p`
  grid-area: bio;
  font-size: 0.8125rem;
  line-height: 1.5625rem;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ hasBio }) => (hasBio ? '1' : '0.5')};
  margin-top: 0.75rem;

  @media only screen and (min-width: 37.5rem) {
    font-size: 0.9375rem;
  }
  @media only screen and (min-width: 56.25rem) {
    margin-top: 0;
  }
`

export const TextSmall = styled.p`
  color: ${({ theme }) => theme.accentColor1};
  font-size: 0.6875rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
`

export const TextBold = styled.p`
  color: ${({ theme }) =>
    theme.themeColor === 'light'
      ? 'var(--clr-accent-300)'
      : 'var(--clr-neutral-100)'};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.48rem;
  text-align: center;

  @media only screen and (min-width: 37.5rem) {
    text-align: left;
  }
`

export const Icon = styled(ReactSVG)`
  grid-column: 1/1;
  svg {
    path {
      fill: ${({ theme }) => theme.accentColor1};
      opacity: ${({ unavailable }) => (unavailable ? '0.5' : '1')};
    }
  }
`

export const Body = styled.div`
  grid-area: info;
  padding: 1.125rem 0.9375rem;
  border-radius: 0.9375rem;
  display: flex;
  justify-content: space-around;
  margin-top: 4px;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme.backgroundColor1};

  @media only screen and (min-width: 37.5rem) {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  @media only screen and (min-width: 56.25rem) {
    justify-content: flex-start;
    padding: 0.9375rem 2rem;
    gap: 3.125rem;
  }
`
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 37.5rem) {
    margin-right: auto;
  }
`

export const Footer = styled.div`
  grid-area: social;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  row-gap: 1rem;

  & div {
    display: grid;
    grid-template-columns: 1.25rem 2fr;
    grid-column: 1/1;
    column-gap: 0.625rem;
  }

  @media only screen and (min-width: 700px) {
    & div {
      display: grid;
      grid-column: auto;
      grid-template-columns: 1.25rem 2fr;
      gap: 0.625rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    grid-column: 1/1;

    path {
      fill: ${({ theme }) => theme.accentColor1};
      opacity: ${({ unavailable }) => {
        console.log(unavailable)
        return unavailable ? '0.5' : '1'
      }};
    }
  }
`

export const Link = styled.a`
  font-size: 0.9375rem;
  font-family: inherit;
  line-height: 1.5625rem;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ unavailable }) => (unavailable ? '0.5' : '1')};
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.accentColor1};
  }

  &:hover {
    text-decoration: ${({ unavailable }) =>
      unavailable ? 'none' : 'underline'};
    cursor: ${({ unavailable }) => (unavailable ? 'default' : 'pointer')};
  }
`
