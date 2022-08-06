import { useState } from 'react'
import days from 'dayjs'
import { Container } from '../globalStyles'
import { Form } from '../components'
import axios from 'axios'
import { useUserContext } from '../context/userContext'

const IconSearch = process.env.PUBLIC_URL + '/images/icon-search.svg'

const Main = () => {
  const { error, dispatch } = useUserContext()
  const [username, setUsername] = useState('')

  const handleOnSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `search user token ${process.env.PERSONAL_ACCESS_TOKEN}`,
          },
        }
      )

      const {
        name,
        login,
        avatar_url,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
      } = data
      const createdAt = days(created_at).format('DD MMM YYYY')

      console.log(createdAt)
      dispatch({
        type: 'SET_USER',
        payload: {
          name,
          login,
          avatar_url,
          createdAt,
          bio,
          public_repos,
          followers,
          following,
          location,
          twitter_username,
          blog,
          company,
        },
      })

      setUsername('')
    } catch (err) {
      if (err.response.status === 404)
        dispatch({ type: 'SET_ERROR', payload: 'No results' })
      console.error(err)
    }
  }

  return (
    <Container as='main'>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label htmlFor='search'>
          <Form.Icon src={IconSearch} alt='icon search' />
        </Form.Label>
        <Form.Input
          id='search'
          placeholder='Search GitHub username...'
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        {error && <Form.Text>{error}</Form.Text>}
        <Form.Button type='submit'>Search</Form.Button>
      </Form>
    </Container>
  )
}

export default Main
