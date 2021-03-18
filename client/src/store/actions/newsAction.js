import axios from "axios"

const baseUrl = 'http://localhost:3000/data'

export const startFetchNews = () => {
  return {
    type: 'START_FETCH_NEWS'
  }
}

export const dispatchData = (news) => {
  return {
    type: 'FETCH_ALL_NEWS',
    payload: news
  }
}

export const fetchLineTodayData = () => {
  return async (dispatch) => {
    try {
      const news = await axios.get(baseUrl)
      dispatch(dispatchData(news))
    } catch (error) {
      console.log(error);
    }
  }
}