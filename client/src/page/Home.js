import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLineTodayData } from '../store/actions/newsAction';

export default function Home() {
  const { news, newsList, loading } = useSelector(state => state.news);
  const [list, setList] = useState([])
  const dispatch = useDispatch();
  const property = {
    imageUrl: "https://i.pinimg.com/originals/60/f0/99/60f099c176554aea5ff3295583f1baeb.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }
  function getList() {
    let result = []
    for (var i in news) {
      result.push({
        id: news[i].id,
        name: news[i].name
      })
    }
    setList(result)
  }
  useEffect(() => {
    dispatch(fetchLineTodayData());
    getList()
    // eslint-disable-next-line
  }, [])
  console.log( typeof list,'<<<<' );
  if (loading) { 
    return <h1>Loading....</h1> 
  }
  return (
    <div class="row mt-5">
      <div class="col-4">
          <div className="container">
            {
              list.map(el => {
                return (
                  <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }} key={el.id}>
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
      <div class="col-8">
        <p>{JSON.stringify(news[1].templates[1].sections[0].articles[0].title)}</p>
      </div>
    </div>  
  )
}
