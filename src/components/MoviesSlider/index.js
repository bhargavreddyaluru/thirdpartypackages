// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {details} = props
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {details.map(item => (
          <MovieItem details={item} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
