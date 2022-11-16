// Write your code here
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  console.log(props)
  return (
    <div className="thumbnail-container">
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
    </div>
  )
}

export default MovieItem
