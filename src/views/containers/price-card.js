import PriceCard from '../components/price-card'
// import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { agenciesActions } from '../../state/ducks/agencies';

const mapStateToProps = (state, ownProps) => ({
    agencies: state.agencies
})

const mapDispatchToProps = {
    fetchAgenciesAction: agenciesActions.fetchAgenciesAction
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceCard))