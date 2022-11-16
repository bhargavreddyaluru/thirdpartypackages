// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')
  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="sub-container">
        <div className="action-movies">
          <h1 className="movie-type-heading">Action Movies</h1>
          <MoviesSlider details={actionMovies} />
        </div>
        <div>
          <h1 className="movie-type-heading">Comedy Movies</h1>
          <MoviesSlider details={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
