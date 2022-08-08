import styled from 'styled-components/macro'

export const CardContainer = styled.div`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 15px;
  box-shadow: ${({ theme }) =>
    theme.themeColor === 'light'
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : 'none'};
  padding: 32px 24px 48px;
  display: grid;
  grid-template-areas:
    'avatar profile profile'
    'bio bio bio'
    'info info info'
    'social social social';
  grid-template-columns: auto 1fr 1fr;
  column-gap: 1.125rem;
  row-gap: 1.125rem;

  @media only screen and (min-width: 600px) {
    grid-template-areas:
      'avatar profile profile'
      'bio bio bio'
      'info info info'
      ' social social social';
    column-gap: 40px;
    padding: 40px;
  }

  @media only screen and (min-width: 900px) {
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

  @media only screen and (min-width: 900px) {
    grid-template-columns: 2fr auto;
    align-items: center;
  }
`

export const Heading1 = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.themeColor === 'light' ? theme.accentColor2 : theme.accentColor1};
  line-height: 23.7px;

  @media only screen and (min-width: 600px) {
    font-size: 26px;
    line-height: 39px;
  }

  @media only screen and (min-width: 900px) {
    grid-column: 1/1;
  }
` //name

export const Heading2 = styled.h2`
  font-size: 13px;
  line-height: 19.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 0;

  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 900px) {
    grid-column: 2/-1;
    grid-row: 1/1;
  }
` // bio

export const Heading3 = styled.h3`
  color: var(--clr-primary);
  font-size: 13px;
  font-weight: 400;
  line-height: 19.25px;

  @media only screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media only screen and (min-width: 900px) {
    grid-column: 1/1;
  }
`

export const Header = styled.div`
  grid-area: avatar;
`

export const Image = styled.img`
  display: block;
  width: 70px;
  border-radius: 50%;

  @media only screen and (min-width: 600px) {
    width: 117px;
    margin-bottom: 4px;
  }
`

export const Text = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ notAvailable }) => (notAvailable ? '0.5' : '1')};
`

export const Paragraph = styled.p`
  grid-area: bio;
  font-size: 13px;
  line-height: 25px;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ hasBio }) => (hasBio ? '1' : '0.5')};
  margin-top: 12px;

  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 900px) {
    margin-top: 0;
  }
`

export const TextSmall = styled.p`
  color: ${({ theme }) => theme.accentColor1};
  font-size: 11px;
  line-height: 16.29px;
  margin-bottom: 8px;
`

export const TextBold = styled.p`
  color: ${({ theme }) =>
    theme.themeColor === 'light'
      ? 'var(--clr-accent-300)'
      : 'var(--clr-neutral-100)'};
  font-size: 16px;
  font-weight: 700;
  line-height: 23.7px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    text-align: left;
  }
`

export const Icon = styled.img`
  grid-column: 1/1;
`

export const Body = styled.div`
  grid-area: info;
  padding: 18px 15px;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  margin-top: 4px;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme.backgroundColor1};

  @media only screen and (min-width: 600px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  @media only screen and (min-width: 900px) {
    justify-content: flex-start;
    padding: 15px 32px;
    gap: 50px;
  }
`
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    margin-right: auto;
  }
`

export const Footer = styled.div`
  grid-area: social;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;

  & div {
    display: grid;
    grid-template-columns: 20px 2fr;
    grid-column: 1/1;
    column-gap: 10px;
  }

  /* & p {
    grid-column: 2/-1;
    font-size: 13px;
    line-height: 19px;
    color: ${({ theme }) => theme.accentColor1};
  } */

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto-fill 2fr;

    & div {
      display: grid;
      grid-column: auto;
      grid-template-columns: 20px 2fr;
      gap: 10px;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  font-size: 15px;
  font-family: inherit;
  line-height: 25px;
  color: ${({ theme }) => theme.accentColor1};
  opacity: ${({ notAvailable }) => (notAvailable ? '0.5' : '1')};
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.accentColor1};
  }

  &:hover {
    text-decoration: ${({ notAvailable }) =>
      notAvailable ? 'none' : 'underline'};
    cursor: ${({ notAvailable }) => (notAvailable ? 'default' : 'pointer')};
  }
`
