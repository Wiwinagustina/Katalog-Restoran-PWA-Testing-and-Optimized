/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query')
  I.see('Maaf Favorite Anda Kosong', '.restaurantEmpty')
  I.amOnPage('/')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Maaf Favorite Anda Kosong', '.restaurantEmpty')
  I.amOnPage('/')

  I.seeElement('.resto-item__content h3 a')

  const firstResto = locate('.resto-item__content h3 a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('.resto-item')
  const likedRestaurantTitle = await I.grabTextFrom('.resto-item__content h3')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
