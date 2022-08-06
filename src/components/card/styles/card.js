import styled from 'styled-components/macro'

export const CardContainer = styled.div`
  background-color: var(--clr-neutral-300);
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px hsla(227, 46%, 51%, 0.2);
  padding: 32px 24px 48px 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr 50px 1fr 1fr;
`

export const Heading1 = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: var(--clr-accent-300);
  line-height: 24px;
  grid-column: 1/1;
` //name

export const Heading2 = styled.h2`` // bio

export const Heading3 = styled.h3`
  color: var(--clr-primary);
  font-size: 13px;
  font-weight: 400;
  line-height: 19.25px;
  margin-bottom: 6px;
  grid-column: 1/1;
` // login

export const Heading4 = styled.h4`` // repos

export const Link = styled.a``

export const Header = styled.div`
  grid-column: 1/1;
  grid-row: 1/3;
  /* margin-bottom: 32px; */
`

export const Info = styled.div`
  grid-column: 2/-1;
  grid-row: 1/1;
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  grid-column: 1/1;
  grid-row: 1/3;
  display: block;
  width: 117px;
  border-radius: 50%;
`

export const HeaderText = styled.p`
  font-size: 13px;
  line-height: 19.25px;
  font-weight: 400;
  color: var(--clr-secondary);
  grid-column: 3/-1;
`

export const Text = styled.p`
  grid-column: 2/-1;
  grid-row: 2/3;
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
  height: 20px;
  margin-right: 13px;
`

export const Body = styled.div`
  grid-column: 2/-1;
  grid-row: 3/3;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: var(--clr-neutral-500);
`
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  grid-column: 2/-1;
  grid-row: 4/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 16px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
