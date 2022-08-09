import { FooterContainer, Text, Link } from './styles/footer'

const Footer = ({ children, ...restProps }) => (
  <FooterContainer {...restProps}>{children}</FooterContainer>
)

Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
)

Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

export default Footer
