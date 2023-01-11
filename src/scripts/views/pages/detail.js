import UrlParser from '../../routes/url-parser'
import restaurantDbSource from '../../data/restaurantDbSource'
import { createMovieDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import CONFIG from '../../globals/config'

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await restaurantDbSource.detailRestaurant(url.id)

    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML = createMovieDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        backdrop_path: CONFIG.BASE_IMAGE_URL,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId
      }
    })
  }
}

export default Detail
