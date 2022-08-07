import { Card } from '../components'
import { Container } from '../globalStyles'
import { useUserContext } from '../context/userContext'
import IconLocation from '../assets/images/icon-location.svg'
import IconTwitter from '../assets/images/icon-twitter.svg'
import IconCompany from '../assets/images/icon-company.svg'
import IconWebsites from '../assets/images/icon-website.svg'

const UserDetails = () => {
  const { user, isLoading } = useUserContext()

  if (isLoading)
    return (
      <div>
        <p>Loading ...</p>
      </div>
    )

  return (
    !isLoading &&
    user && (
      // <Container as='section'>
      <Card>
        <Card.Header>
          <Card.Image src={user.avatar_url} alt={user.name} />
        </Card.Header>
        <Card.Info>
          <Card.Heading1>{user.name}</Card.Heading1>
          <Card.Heading3>{`@${user.login}`}</Card.Heading3>
          <Card.Heading2>{`Joined ${user.createdAt}`}</Card.Heading2>
        </Card.Info>
        <Card.Paragraph>
          {user.bio ? user.bio : 'This profile has no bio'}
        </Card.Paragraph>
        <Card.Body>
          <Card.FlexCol>
            <Card.TextSmall>Repos</Card.TextSmall>
            <Card.TextBold>{user.public_repos}</Card.TextBold>
          </Card.FlexCol>
          <Card.FlexCol>
            <Card.TextSmall>Followers</Card.TextSmall>
            <Card.TextBold>{user.followers}</Card.TextBold>
          </Card.FlexCol>
          <Card.FlexCol>
            <Card.TextSmall>Following</Card.TextSmall>
            <Card.TextBold>{user.following}</Card.TextBold>
          </Card.FlexCol>
        </Card.Body>
        <Card.Footer>
          <Card.Wrapper>
            <Card.Icon src={IconLocation} alt='location' />
            <Card.Text notAvailable={!user.location}>{user.location}</Card.Text>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon src={IconTwitter} alt='twitter' />
            <Card.Text notAvailable={!user.twitter_username}>
              {!user.twitter_username ? 'Not Available' : user.twitter_username}
            </Card.Text>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon src={IconWebsites} alt='websites' />
            <Card.Text notAvailable={!user.blog}>
              {!user.blog ? 'Not Available' : user.blog}
            </Card.Text>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon src={IconCompany} alt='company' />
            <Card.Text notAvailable={!user.company}>
              {!user.company ? 'Not Available' : user.company}
            </Card.Text>
          </Card.Wrapper>
        </Card.Footer>
      </Card>
      // </Container>
    )
  )
}

export default UserDetails
