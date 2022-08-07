import {
  CardContainer,
  Text,
  TextSmall,
  TextBold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Image,
  Header,
  // HeaderText,
  Link,
  Icon,
  Info,
  Body,
  FlexCol,
  Footer,
  Wrapper,
  Paragraph,
} from './styles/card'

const Card = ({ children, ...restProps }) => (
  <CardContainer {...restProps}>{children}</CardContainer>
)

Card.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Card.Paragraph = ({ children, ...restProps }) => (
  <Paragraph {...restProps}>{children}</Paragraph>
)

Card.TextSmall = ({ children, ...restProps }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
)

Card.TextBold = ({ children, ...restProps }) => (
  <TextBold {...restProps}>{children}</TextBold>
)

// Card.HeaderText = ({ children, ...restProps }) => (
//   <HeaderText {...restProps}>{children}</HeaderText>
// )

Card.Heading1 = ({ children, ...restProps }) => (
  <Heading1 {...restProps}>{children}</Heading1>
)

Card.Heading2 = ({ children, ...restProps }) => (
  <Heading2 {...restProps}>{children}</Heading2>
)

Card.Heading3 = ({ children, ...restProps }) => (
  <Heading3 {...restProps}>{children}</Heading3>
)

Card.Heading4 = ({ children, ...restProps }) => (
  <Heading4 {...restProps}>{children}</Heading4>
)

Card.Header = ({ children, ...restProps }) => (
  <Header {...restProps}>{children}</Header>
)

Card.Body = ({ children, ...restProps }) => (
  <Body {...restProps}>{children}</Body>
)

Card.FlexCol = ({ children, ...restProps }) => (
  <FlexCol {...restProps}>{children}</FlexCol>
)

Card.Footer = ({ children, ...restProps }) => (
  <Footer {...restProps}>{children}</Footer>
)

Card.Info = ({ children, ...restProps }) => (
  <Info {...restProps}>{children}</Info>
)

Card.Image = ({ ...restProps }) => <Image {...restProps} />

Card.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
)

Card.Wrapper = ({ children, ...restProps }) => (
  <Wrapper {...restProps}>{children}</Wrapper>
)

Card.Icon = ({ ...restProps }) => <Icon {...restProps} />

export default Card
