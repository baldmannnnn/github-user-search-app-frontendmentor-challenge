import { createContext, useReducer, useEffect, useContext } from 'react'
import axios from 'axios'
import days from 'dayjs'
import userReducer from '../reducer/userReducer'
const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true })

    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          'https://api.github.com/users/octocat',
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
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'error' })
      }
    }

    fetchUser()
    dispatch({ type: 'SET_LOADING', payload: false })
  }, [])

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext(UserContext)

export { UserContextProvider, useUserContext }
