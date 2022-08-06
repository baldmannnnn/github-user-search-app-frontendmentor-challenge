export default function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { user: action.payload, isLoading: false, error: null }
    case 'SET_LOADING':
      return { ...state, isLoading: true, error: null }
    case 'SET_ERROR':
      return { user: null, isLoading: false, error: action.payload }
    default:
      throw new Error('error on userReducer')
  }
}
