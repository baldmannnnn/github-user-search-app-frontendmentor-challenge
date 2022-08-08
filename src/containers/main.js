import { useState } from 'react'
import { Form } from '../components'
import { useUserContext } from '../context/userContext'
import useFetchUser from '../hooks/useFetchUser'

const IconSearch = process.env.PUBLIC_URL + '/images/icon-search.svg'

const Main = () => {
  const { error, dispatch } = useUserContext()
  const [username, setUsername] = useState('')

  const { fetchUser } = useFetchUser(username)

  const handleOnSubmit = async e => {
    e.preventDefault()
    try {
      const userData = await fetchUser(username)
      dispatch({ type: 'SET_USER', payload: userData })

      setUsername('')
    } catch (err) {
      if (err.response.status === 404)
        dispatch({ type: 'SET_ERROR', payload: 'No results' })
    }
  }

  return (
    <main>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label htmlFor='search'>
          {/* <Form.Icon src={IconSearch} alt='icon search' /> */}
          <Form.IconSVG size='24px' src={IconSearch} alt='icon search' />
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
    </main>
  )
}

export default Main
