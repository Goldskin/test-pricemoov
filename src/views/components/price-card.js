import Card from '../components/card'
import React from 'react'
import Selector from '../components/selector'
import Loader from './loader';

class PriceCard extends React.Component {
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
        this.props.selectAgencyAction(value)
    }

    handleCategoriesChange (value) {
        this.props.selectCategoryAction(value)
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
                    value={this.props.agency}
                    onChange={(value) => this.handleAgenciesChange(value)}
                    options={this.getOption(this.props.agencies)}
                />
                <Selector
                    title="Categories"
                    value={this.props.category}
                    onChange={(value) => this.handleCategoriesChange(value)}
                    options={this.getOption(this.props.categories)}
                />
            </Card>
        )
    }
}

export default PriceCard