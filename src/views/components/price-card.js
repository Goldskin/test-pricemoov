import Card from '../components/card'
import React from 'react'
import Selector from '../components/selector'
import Table from '../components/table'

class PriceCard extends React.Component {
    getOption (options) {
        return options.map(option => ({
            name: option.name,
            value: option.id,
        }))
    }

    componentWillMount() {
        this.props.init()
    }

    agenciesChange (agencyId) {
        this.props.selectAgencyAction({ agencyId })
        this.props.fetchCategoriesAndPrices({ agencyId })
    }

    categoriesChange (categoryId) {
        this.props.selectCategoryAction({ categoryId })
        this.props.fetchPricesAction({ categoryId, agencyId: this.props.agency })
    }

    render () {
        return (
            <Card>
                <Selector
                    loading={this.props.agenciesFetching}
                    title="Agences"
                    value={this.props.agency}
                    onChange={(value) => this.agenciesChange(value)}
                    options={this.getOption(this.props.agencies)}
                />
                <Selector
                    loading={this.props.categoriesFetching}
                    title="Categories"
                    value={this.props.category}
                    onChange={(value) => this.categoriesChange(value)}
                    options={this.getOption(this.props.categories)}
                />
                <Table
                    rows={this.props.prices}
                />
            </Card>
        )
    }
}

export default PriceCard