const initialState = {
  news: [],
  newsList: [],
  loading: true
}

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_NEWS':
      return {
        ...state,
        news: action.payload.data.data.result.categories,
        newsList: action.payload.data.data.result.categoryList,
        loading: false
      }
    default:
      return state
  }
}

export default newsReducers;