import { Card } from '../components'
import { useUserContext } from '../context/userContext'
import IconLocation from '../assets/images/icon-location.svg'
import IconTwitter from '../assets/images/icon-twitter.svg'
import IconCompany from '../assets/images/icon-company.svg'
import IconWebsites from '../assets/images/icon-website.svg'

const UserDetails = () => {
  const { user, isLoading } = useUserContext()

  return (
    !isLoading &&
    user && (
      <Card as='section'>
        <Card.Header>
          <Card.Image src={user.avatar_url} alt={user.name} />
        </Card.Header>
        <Card.Info>
          <Card.Heading1>
            {!user.name ? user.login.replace('@', '') : user.name}
          </Card.Heading1>
          <Card.Heading3>{`@${user.login}`}</Card.Heading3>
          <Card.Heading2>{`Joined ${user.createdAt}`}</Card.Heading2>
        </Card.Info>
        <Card.Paragraph hasBio={user.bio}>
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
            <Card.Icon
              unavailable={!user?.location ? 1 : 0}
              src={IconLocation}
              alt='location'
            />
            <Card.Text unavailable={!user.location}>{user.location}</Card.Text>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon
              unavailable={!user.twitter_username ? 1 : 0}
              src={IconTwitter}
              alt='twitter'
            />
            <Card.Link
              target='_blank'
              href={`${
                !user.twitter_username
                  ? ''
                  : 'https://twitter.com/' + user.twitter_username
              }`}
              unavailable={!user.twitter_username}>
              {!user.twitter_username ? 'Not Available' : user.twitter_username}
            </Card.Link>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon
              unavailable={!user.blog ? 1 : 0}
              src={IconWebsites}
              alt='websites'
            />
            <Card.Link
              target={`${!user.blog ? '_self' : '_blank'}`}
              href={`${
                !user.blog
                  ? '/'
                  : !user.blog.includes('https')
                  ? 'https://' + user.blog
                  : user.blog
              }`}
              unavailable={!user.blog}>
              {!user.blog
                ? 'Not Available'
                : user.blog.includes('https')
                ? user.blog
                : 'https://' + user.blog}
            </Card.Link>
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Icon
              unavailable={!user.company ? 1 : 0}
              src={IconCompany}
              alt='company'
            />
            <Card.Link
              target='_blank'
              href={
                !user.company
                  ? '/'
                  : 'https://github.com/' + user.company.replace('@', '')
              }
              unavailable={!user.company}>
              {!user.company ? 'Not Available' : user.company.replace('@', '')}
            </Card.Link>
          </Card.Wrapper>
        </Card.Footer>
      </Card>
    )
  )
}

export default UserDetails
