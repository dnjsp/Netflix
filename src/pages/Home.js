import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
import { movieAction } from '../redux/actions/movieAction'
import MovieSlide from '../component/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, [])

  // loading true면 loading spinner를 보여주고 loadin이 false면 데이터 보여줌
  // true: 데이터 도착 전
  // false: 데이터 도착 후, 에러났을 때
  if (loading) {
    return <ClipLoader
      color='#fff'
      loading={loading}
      size={150}
    />
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]} />

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  )
}

export default Home
