import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLineTodayData } from '../store/actions/newsAction';
import Carousel from '../components/Carousel'

export default function Home() {
  const { news, newsList, loading } = useSelector(state => state.news);
  const [list, setList] = useState([])
  const [newsLine, setNewsLine] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLineTodayData());
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    getList()
    getNewsLine()
    // eslint-disable-next-line
  },[news])
  function getNewsLine(params) {
    let result = []
    if (!news) {
      setNewsLine(result)
    }
    else if (!params) {
      params = 0
    }
    else if (news[params]) {
      for (var i in news[params].templates[1].sections[0].articles) {
        result.push({
          id: news[params].templates[1].sections[0].articles[i].id,
          categoryName: news[params].templates[1].sections[0].articles[i].categoryName,
          title: news[params].templates[1].sections[0].articles[i].title,
          url: news[params].templates[1].sections[0].articles[i].url ? news[params].templates[1].sections[0].articles[i].url.url : null,
        })
      }
      setNewsLine(result)
    }
  }

  function getList() {
    let result = []
    for (var i in newsList) {
      result.push({
        id: newsList[i].id,
        name: newsList[i].name
      })
    }
    setList(result)
  }
  function changeNews(params) {
    console.log(params)
    getNewsLine(params)
  }
  if (loading && !list.name) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <div className="container">
          {
            list.map((el, index) => {
              return (
                <div onClick={() => changeNews(index)}>
                  <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }} key={el.id}>
                    <div className="card-body" >
                      <h5 className="card-title">{el.name}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="col-8 row justify-content-center">
        <Carousel/>
        {newsLine.length >= 1 ?
          newsLine.map(el => {
            return (
              <div className="card text-white bg-secondary mb-1" style={{ maxWidth: "18rem", marginRight: "1rem", height: '12rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <a href={el.url}>
                    <div className="mb-auto">
                      <button className="btn btn-success">LINE TODAY</button>
                    </div>
                  </a>
                </div>
              </div>
            )
          }) 
          :
          <div>
            <p>News not found </p>
          </div> 
        }
      </div>
    </div>
  )
}
