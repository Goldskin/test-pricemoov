import Card from '../components/card'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Selector from '../components/selector';

const mapStateToProps = (state, ownProps) => ({})

class priceCard extends React.Component {
    getOption () {
        return [
            { name: 'test-name1', value: 'test-value1' },
            { name: 'test-name2', value: 'test-value2' },
            { name: 'test-name3', value: 'test-value3' },
        ]
    }

    handleAgenciesChange (value) {
        this.setState({
            currentAgency: value
        }, () => this.props.history.push(`/agencies/${this.state.currentAgency}`))
    }

    handleCategoriesChange (value) {
        this.setState({
            currentCategory: value
        }, () => this.props.history.push(`/agencies/${this.state.currentAgency}/categories/${this.state.currentCategory}`))
    }

    render () {
        console.log(this.props)
        return (
            <Card>
                <Selector
                    title="Agences"
                    value="test-value3"
                    onChange={(value) => this.handleAgenciesChange(value)}
                    options={this.getOption()}
                />
                <Selector
                    title="Categories"
                    value="test-value2"
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
)(priceCard))