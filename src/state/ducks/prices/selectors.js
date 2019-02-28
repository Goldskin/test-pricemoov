/* SELECTOR FUNCTIONS

These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.

*/

const getPrice = (prices, priceId) =>
    prices.find(price => price.id === priceId)

const getPricesByCategories = (prices, categoryId) =>
    prices.filter(price => price.categoryId === categoryId)

const getPriceValidPrice = (prices, filter) =>
    filter
        ? prices.filter(price => price.isValidated === true)
        : prices

const orderPriceBy = (prices, order) =>
    prices.sort(
        (price1, price2) => order.direction === null
            ? true
            : order.direction === true
                ? price1[order.name] - price2[order.name]
                : price2[order.name] - price1[order.name]
    )

export {
    getPrice,
    getPricesByCategories,
    getPriceValidPrice,
    orderPriceBy,
}