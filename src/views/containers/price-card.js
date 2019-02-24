import PriceCard from '../components/price-card'
import { connect } from 'react-redux'
import { agenciesActions, agenciesOperations } from '../../state/ducks/agencies'
import { categoriesActions, categoriesSelectors } from '../../state/ducks/categories'
import { pricesActions, pricesSelectors } from '../../state/ducks/prices'

const categories = (state) => ({
    categories: categoriesSelectors.getCategoriesByAgency(
        state.categoriesState.categories,
        state.agenciesState.selected
    ),
    categoriesFetching: state.categoriesState.fetching,
    category: state.categoriesState.selected,
})

const agencies = (state) => ({
    agencies: state.agenciesState.agencies,
    agenciesFetching: state.agenciesState.fetching,
    agency: state.agenciesState.selected,
})

const prices = (state) => ({
    prices: pricesSelectors.getPricesByCategories(
        state.pricesState.prices,
        state.categoriesState.selected
    ),
    pricesFetching: state.pricesState.fetching,
    price: state.pricesState.selected,
})

const mapStateToProps = (state, ownProps) => ({
    ...agencies(state),
    ...categories(state),
    ...prices(state),
})

const mapDispatchToProps = {
    fetchAgenciesAction: agenciesActions.fetchAgenciesAction,
    selectAgencyAction: agenciesActions.selectAgencyAction,
    fetchCategoriesAction: categoriesActions.fetchCategoriesAction,
    selectCategoryAction: categoriesActions.selectCategoryAction,
    init: agenciesOperations.fetchAgencyAndCategories
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceCard)

