import {
  HeaderContainer,
  Wrapper,
  Logo,
  Text,
  Btn,
  Icon,
} from './styles/header'

const Header = ({ children, ...restProps }) => (
  <HeaderContainer {...restProps}>{children}</HeaderContainer>
)

Header.Wrapper = ({ children, ...restProps }) => (
  <Wrapper {...restProps}>{children}</Wrapper>
)

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Header.Btn = ({ children, ...restProps }) => (
  <Btn {...restProps}>{children}</Btn>
)

Header.Logo = ({ children, ...restProps }) => (
  <Logo {...restProps}>{children}</Logo>
)

Header.Icon = ({ children, ...restProps }) => <Icon {...restProps} />

export default Header
