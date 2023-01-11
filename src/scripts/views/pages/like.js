import FavoriteRestaurantIdb from '../../data/favoriteRestaurantIdb'
import { createMovieItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
        <div class="content">
          <div id="movies" class="movies">
            <div id="query" class="restaurantEmpty">

            </div>
            <div id="restaurantItem" class="restaurantItem">

            </div>
          </div>
        </div>
      `
  },

  async afterRender () {
    const movies = await FavoriteRestaurantIdb.getAllRestaurant()
    const moviesContainer = document.querySelector('#restaurantItem')

    if (movies.length === 0) {
      document.querySelector('.restaurantEmpty').innerHTML = '<h2>Maaf Favorite Anda Kosong</h2>'
    } else {
      movies.forEach((restaurant) => {
        moviesContainer.innerHTML += createMovieItemTemplate(restaurant)
      })
    }
  }
}

export default Like
