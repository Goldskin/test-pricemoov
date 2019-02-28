import PriceCard from '../components/price-card'
import { connect } from 'react-redux'
import { agenciesActions, agenciesOperations } from '../../state/ducks/agencies'
import { categoriesActions, categoriesSelectors, categoriesOperations } from '../../state/ducks/categories'
import { pricesActions, pricesSelectors } from '../../state/ducks/prices'

const categories = state => ({
    categories: categoriesSelectors.getCategoriesByAgency(
        state.categoriesState.categories,
        state.agenciesState.selected
    ),
    categoriesFetching: state.categoriesState.fetching,
    category: state.categoriesState.selected,
})

const agencies = state => ({
    agencies: state.agenciesState.agencies,
    agenciesFetching: state.agenciesState.fetching,
    agency: state.agenciesState.selected,
})

const prices = state => {
    const priceOrderedByDate = state.pricesState.prices.sort(
        (price1, price2) => price1.startDate - price2.startDate
    )

    const pricesByCat = pricesSelectors.getPricesByCategories(
        priceOrderedByDate,
        state.categoriesState.selected
    )

    const validPrice = pricesSelectors.getPriceValidPrice(
        pricesByCat,
        state.pricesState.displayValid
    )

    const orderedPrice = pricesSelectors.orderPriceBy(
        validPrice,
        state.pricesState.order
    )

    return {
        prices: orderedPrice,
        pricesFetching: state.pricesState.fetching,
        displayValid: state.pricesState.displayValid
    }
}

const mapStateToProps = state => ({
    ...agencies(state),
    ...categories(state),
    ...prices(state),
})

const mapDispatchToProps = {
    fetchAgenciesAction: agenciesActions.fetchAgenciesAction,
    selectAgencyAction: agenciesActions.selectAgencyAction,
    fetchCategoriesAndPrices: categoriesOperations.fetchCategoriesAndPrices,
    fetchCategoriesAction: categoriesActions.fetchCategoriesAction,
    selectCategoryAction: categoriesActions.selectCategoryAction,
    init: agenciesOperations.fetchAgencyAndCategories,
    fetchPricesAction: pricesActions.fetchPricesAction,
    displayValidPrices: pricesActions.displayValidPrices,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceCard)

