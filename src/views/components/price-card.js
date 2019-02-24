import Card from '../components/card'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Selector from '../components/selector';

const mapStateToProps = (state, ownProps) => ({})

class PriceCard extends React.Component {
    constructor (...args) {
        super(...args)
        console.log(this.props)
        this.state = { ...this.props.match.params}
    }

    getOption () {
        return [
            { name: 'test-name1', value: 'test-value1' },
            { name: 'test-name2', value: 'test-value2' },
            { name: 'test-name3', value: 'test-value3' },
        ]
    }

    handleAgenciesChange (value) {
        this.props.fetchAgenciesAction()
        this.setState({
            agency: value
        }, () => this.props.history.replace(`/prices/${this.state.agency}`))
    }

    handleCategoriesChange (value) {
        this.setState({
            category: value
        }, () => this.props.history.replace(`/prices/${this.state.agency}/${this.state.category}`))
    }

    render () {
        return (
            <Card>
                <Selector
                    title="Agences"
                    value={this.state.agency}
                    onChange={(value) => this.handleAgenciesChange(value)}
                    options={this.getOption()}
                />
                <Selector
                    title="Categories"
                    value={this.state.category}
                    onChange={(value) => this.handleCategoriesChange(value)}
                    options={this.getOption()}
                />
            </Card>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(PriceCard))