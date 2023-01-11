/* eslint-disable no-undef */
const assert = require('assert')

Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.see('Maaf Favorite Anda Kosong', '.restaurantEmpty')
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Maaf Favorite Anda Kosong', '.restaurantEmpty')
  I.amOnPage('/')

  I.seeElement('.resto-item__content h3 a')
  const firstResto = locate('.resto-item__content h3 a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  // I.amOnPage('/');
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')

  I.seeElement('.resto-item__content h3 a')
  const firstRestoLike = locate('.resto-item__content h3 a').first()
  const firstRestaurantTitleLike = await I.grabTextFrom(firstRestoLike)
  I.click(firstRestoLike)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.see('Maaf Favorite Anda Kosong', '.restaurantEmpty')

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleLike)
})
