import Card from '../components/card'
import React from 'react'
import Selector from '../components/selector'
import Table from '../components/table'
import moment from 'moment'

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

    formatDate (date) {
        return moment.unix(date).format('D/M/Y')
    }

    getRows () {
        return this.props.prices.map(price => ([
            { name: `${this.formatDate(price.startDate)}`, className: `td-black` },
            { name: `Prix: ${price.price}€`, className: `` },
            { name: `Prix suggéré: ${price.suggestedPrice}€`, className: `` },
            { name: `isValid: ${price.isValidated ? 'Y' : 'N'}`, className: `` },
        ]))
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
                    loading={this.props.pricesFetching}
                    rows={this.getRows()}
                />
            </Card>
        )
    }
}

export default PriceCard