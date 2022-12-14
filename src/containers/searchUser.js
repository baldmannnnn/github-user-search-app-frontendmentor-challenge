import { useState } from 'react'
import { Form } from '../components'
import { useUserContext } from '../context/userContext'
import useFetchUser from '../hooks/useFetchUser'
import { ReactComponent as IconSearch } from '../assets/images/icon-search.svg'

const SearchUser = () => {
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
    <Form role='search' onSubmit={handleOnSubmit}>
      <Form.Label htmlFor='search'>
        <IconSearch />
      </Form.Label>
      <Form.Input
        id='search'
        placeholder='Search Github username...'
        onChange={e => {
          if (error) {
            dispatch({ type: 'SET_ERROR', payload: null })
          }
          setUsername(e.target.value)
        }}
        value={username}
      />
      {error && <Form.Text>{error}</Form.Text>}
      <Form.Button type='submit'>Search</Form.Button>
    </Form>
  )
}

export default SearchUser
