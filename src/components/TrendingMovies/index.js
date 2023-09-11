import './index.css'

const TrendingMovies = props => {
  const {eachMovie} = props
  const {title} = eachMovie
  console.log(title)
  return (
    <li className="movies-list">
      <h1>{title}</h1>
      <h1>heelooooo</h1>
    </li>
  )
}

export default TrendingMovies
