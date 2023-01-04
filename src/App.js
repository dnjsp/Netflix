import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './component/Navigation'
import Favorite from './component/Favorite';

// 1. 3개 페이지 필요하다. (홈페이지, movie페이지, movieDetail페이지)
// 2. 홈페이지에서 배너를 볼 수 있다.
// 3. 3가지 섹션의 영화를 볼 수 있다. (popular, top rated, upcoming)
// 4. 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부를 알 수 있다.
// 5. 영화를 슬라이드로 넘기면서 볼 수 있다.

// 6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등등...)
// 7. trailer를 누르면 trailer를 볼 수 있다.
// 8. 영화의 리뷰를 볼 수 있다.
// 9. 관련된 영화도 볼 수 있다.

// 10. 영화를 검색을 할 수 있다.
// 11. 영화를 정렬할 수 있다.

function App() {
  return (
    <div >
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
