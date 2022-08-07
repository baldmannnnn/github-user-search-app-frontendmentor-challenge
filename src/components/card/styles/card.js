import styled from 'styled-components/macro'

export const CardContainer = styled.div`
  background-color: var(--clr-neutral-300);
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px hsla(227, 46%, 51%, 0.2);
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

  @media only screen and (min-width: 550px) {
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
  grid-area: info;
  display: grid;
  grid-area: profile;
  display: grid;
  align-content: space-evenly;

  @media only screen and (min-width: 900px) {
    grid-template-areas:
      ' name name created'
      'username username username';
  }
`

export const Heading1 = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: var(--clr-accent-300);
  line-height: 24px;
  grid-area: name;

  @media only screen and (min-width: 550px) {
    font-size: 26px;
    line-height: 39px;
  }
` //name

export const Heading2 = styled.h2`
  font-size: 13px;
  line-height: 19.25px;
  font-weight: 400;
  color: var(--clr-secondary);
  grid-area: created;
  margin-bottom: 0;

  @media only screen and (min-width: 550px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
` // bio

export const Heading3 = styled.h3`
  color: var(--clr-primary);
  font-size: 13px;
  font-weight: 400;
  line-height: 19.25px;
  margin-bottom: 6px;
  grid-area: username;

  @media only screen and (min-width: 550px) {
    font-size: 16px;
  }
` // login

export const Heading4 = styled.h4`` // repos

export const Link = styled.a``

export const Header = styled.div`
  /* margin-bottom: 32px; */
  grid-area: avatar;
`

export const Image = styled.img`
  display: block;
  width: 70px;
  border-radius: 50%;

  @media only screen and (min-width: 550px) {
    width: 117px;
  }
`

export const HeaderText = styled.p`
  font-size: 13px;
  line-height: 19.25px;
  font-weight: 400;
  color: var(--clr-secondary);
`

export const Text = styled.p`
  grid-area: bio;
  font-size: 15px;
  line-height: 25px;
  color: var(--clr-accent-100);
  opacity: ${({ notAvailable }) => (notAvailable ? '0.5' : '1')};
`

export const TextSmall = styled.p`
  color: var(--clr-accent-100);
  font-size: 11px;
  line-height: 16.29px;
  margin-bottom: 8px;
`

export const TextBold = styled.p`
  color: var(--clr-accent-300);
  font-size: 300;
  font-weight: 700;
  line-height: 23.7px;
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
  background-color: var(--clr-neutral-500);
`
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
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

  & p {
    grid-column: 2/-1;
    font-size: 13px;
    line-height: 19px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
