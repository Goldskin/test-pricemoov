import Card from '../components/card'
import React from 'react'
import Selector from '../components/selector'
import Loader from './loader';

class PriceCard extends React.Component {
    constructor (...args) {
        super(...args)
        this.state = { ...this.props.match.params}
    }

    getOption (agencies) {
        return agencies.map(agency => ({
            name: agency.name,
            value: agency.id,
        }))
    }

    componentWillMount() {
        this.props.fetchAgenciesAction()
    }

    handleAgenciesChange (value) {
        this.props.fetchCategoriesAction(value)
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
        if (this.props.agenciesFetching) {
            return (
                <Card>
                    <div className="d-flex justify-content-center">
                        <Loader></Loader>
                    </div>
                </Card>
            )
        }
        return (
            <Card>
                <Selector
                    title="Agences"
                    value={this.state.agency}
                    onChange={(value) => this.handleAgenciesChange(value)}
                    options={this.getOption(this.props.agencies)}
                />
                {/* <Selector
                    title="Categories"
                    value={this.state.category}
                    onChange={(value) => this.handleCategoriesChange(value)}
                    options={this.getOption()}
                /> */}
            </Card>
        )
    }
}

export default PriceCard