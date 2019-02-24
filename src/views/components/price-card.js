import Card from '../components/card'
import React from 'react'
import Selector from '../components/selector'

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

    handleAgenciesChange (value) {
        this.props.fetchCategoriesAction({ agencyId: value })
        this.props.selectAgencyAction({ agencyId: value })
    }

    handleCategoriesChange (value) {
        this.props.selectCategoryAction({ categoryId: value })
    }

    render () {
        return (
            <Card>
                <Selector
                    loading={this.props.agenciesFetching}
                    title="Agences"
                    value={this.props.agency}
                    onChange={(value) => this.handleAgenciesChange(value)}
                    options={this.getOption(this.props.agencies)}
                />
                <Selector
                    loading={this.props.categoriesFetching}
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