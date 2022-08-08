import { useCallback } from 'react'
import axios from 'axios'
import days from 'dayjs'

const BASE_URL = 'https://api.github.com/users/'

const useFetchUser = (username = 'octocat') => {
  const fetchUser = useCallback(async () => {
    // try {
    const { data } = await axios.get(BASE_URL + username, {
      headers: {
        Authorization: `search user token ${process.env.PERSONAL_ACCESS_TOKEN}`,
      },
    })

    // const {
    //   name,
    //   login,
    //   avatar_url,
    //   created_at,
    //   bio,
    //   public_repos,
    //   followers,
    //   following,
    //   location,
    //   twitter_username,
    //   blog,
    //   company,
    // } = data

    const createdAt = days(data.created_at).format('DD MMM YYYY')
    const {
      name,
      login,
      avatar_url,

      bio,
      public_repos,
      followers,
      following,
      location,
      twitter_username,
      blog,
      company,
    } = data

    return {
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
    }

    //  dispatch({
    //   type: 'SET_USER',
    //   payload: {
    //     name,
    //     login,
    //     avatar_url,
    //     createdAt,
    //     bio,
    //     public_repos,
    //     followers,
    //     following,
    //     location,
    //     twitter_username,
    //     blog,
    //     company,
    //   },
    // })
    // } catch (error) {
    //   dispatch({ type: 'SET_ERROR', payload: 'error' })
    // }
  }, [username])

  return { fetchUser }
}

export default useFetchUser
