import { createContext, useReducer, useEffect, useContext } from 'react'
import userReducer from '../reducer/userReducer'
import useFetchUser from '../hooks/useFetchUser'
const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isLoading: true,
    error: null,
  })
  const { fetchUser } = useFetchUser()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true })

    const fetchUserData = async () => {
      try {
        const userDetails = await fetchUser()
        dispatch({ type: 'SET_USER', payload: userDetails })
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'error' })
      }
    }

    fetchUserData()
    dispatch({ type: 'SET_LOADING', payload: false })
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext(UserContext)

export { UserContextProvider, useUserContext }
