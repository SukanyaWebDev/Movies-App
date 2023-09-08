import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import TrendingMovies from '../TrendingMovies'
import './index.css'

class HomePage extends Component {
  state = {
    trendingList: [],
  }

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
    const apiUrl = 'https://apis.ccbp.in/movies-app/trending-movies'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.results.map(each => ({
        id: each.id,
        backdropPath: each.backdrop_path,
        overview: each.overview,
        posterPath: each.poster_path,
        title: each.title,
      }))

      this.setState({trendingList: updatedData})
    }
  }

  render() {
    const {trendingList} = this.state
    console.log(trendingList)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect path="/login" />
    }

    // const settings = {
    //   dots: true,
    //   slidesToShow: 1,
    //   dotsClass: 'slick-dots',

    //   //   slidesToScroll: 1,
    // }

    return (
      <div className="main-container">
        <div className="top-container">
          <Header />
          <div className="super-man-container">
            <h1 className="super-man-heading">Super Man</h1>
            <p className="description">
              Superman is a fictional superhero who first appeared in American
              comic books published by DC Comics.
            </p>
            <button type="button" className="play-button">
              Play
            </button>
          </div>
        </div>

        <div className="main-page">
          <div className="trending-container">
            <h1 className="orgin-head">Trending Now</h1>
            <ul className="slider-container">
              <Slider>
                {trendingList.map(eachMovie => (
                  <TrendingMovies eachMovie={eachMovie} key={eachMovie.id} />
                ))}
              </Slider>
            </ul>
          </div>

          <div className="trending-container">
            <h1 className="orgin-head">Orginal</h1>
            <ul className="slider-container">hii</ul>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage
