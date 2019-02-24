/* SELECTOR FUNCTIONS

These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.

*/

const getPrice = (prices, priceId) =>
    prices.find(price => price.id === priceId)

const getPricesByCategories = (prices, categoryId) =>
    prices.filter(price => price.categoryId === categoryId)

export {
    getPrice,
    getPricesByCategories,
}