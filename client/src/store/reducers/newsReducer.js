const initialState = {
  news: [],
  loading: false
}

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_NEWS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ALL_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false
      }
    case 'FETCH_ONE_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false
      }
  
    default:
      return state
  }
}

export default newsReducers;