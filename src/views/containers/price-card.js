import PriceCard from '../components/price-card'
import { connect } from 'react-redux'
import { agenciesActions, agenciesOperations } from '../../state/ducks/agencies'
import { categoriesActions, categoriesSelectors } from '../../state/ducks/categories'

const mapStateToProps = (state, ownProps) => ({
    agencies: state.agenciesState.agencies,
    agenciesFetching: state.agenciesState.fetching,
    agency: state.agenciesState.selected,
    categories: categoriesSelectors.getCategoriesByAgency(
        state.categoriesState.categories,
        state.agenciesState.selected
    ),
    categoriesFetching: state.categoriesState.fetching,
    category: state.categoriesState.selected,
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

