import CONFIG from '../../globals/config'

const createMovieDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" 
    data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
  </div>
  <div class="resto__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="review_customer">
    <h3>Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
      <div class="customerReview">
          <p class="custReview">Review :"${review.review}"</p>
          <p class="custName">Nama : ${review.name}</p>
          <p class="custDate">Waktu : ${review.date}</p>
      </div>`)}
  </div>
`

const createMovieItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
