import PriceCard from '../components/price-card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { agenciesActions } from '../../state/ducks/agencies'
import { categoriesActions } from '../../state/ducks/categories'

const mapStateToProps = (state, ownProps) => ({
    agencies: state.agenciesState.agencies,
    agenciesFetching: state.agenciesState.fetching,
    categories: state.categoriesState.categories,
    categoriesFetching: state.categoriesState.fetching,
})

const mapDispatchToProps = {
    fetchAgenciesAction: agenciesActions.fetchAgenciesAction,
    fetchCategoriesAction: categoriesActions.fetchCategoriesAction,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceCard))

