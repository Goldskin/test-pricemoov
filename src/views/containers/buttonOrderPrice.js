import buttonOrder from '../components/buttonOrder'
import { connect } from 'react-redux'
import { pricesActions } from '../../state/ducks/prices'

const mapStateToProps = state => ({
    order: state.pricesState.order
})

const mapDispatchToProps = {
    onCLick: name => pricesActions.orderBy({ name }),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(buttonOrder)

