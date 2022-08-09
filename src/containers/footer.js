import { Footer } from '../components'

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Text>
        Challenge by{' '}
        <Footer.Link
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'>
          Frontend Mentor
        </Footer.Link>
        . Coded by <Footer.Link href='#'>Baldo</Footer.Link>.
      </Footer.Text>
    </Footer>
  )
}
