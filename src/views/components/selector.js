import React from 'react'
import Loader from './loader';


export default class extends React.Component {
    getSelect () {
        return (
            <select
                value={this.props.value ? this.props.value : ''}
                onChange={(event) => this.props.onChange(event.target.value)}
            >
                {this.getOptions(this.props.options)}
            </select>
        )
    }

    getOptions (options) {
        return options.map(option => {
            return (
                <option
                    value={option.value}
                    key={option.value}
                >
                    {option.name}
                </option>
            )
        })
    }
    render () {
        if (this.props.loading && !this.props.options.length) {
            return (
                <div className="d-flex justify-content-between">
                    <h2>{this.props.title}</h2>
                    <Loader></Loader>
                </div>
            )
        }

        if (this.props.loading) {
            return (
                <div className="d-flex justify-content-between">
                    <h2>{this.props.title}</h2>
                    <div>
                        <Loader></Loader>
                        {this.getSelect()}
                    </div>
                </div>
            )
        }
        return (
            <div className="d-flex justify-content-between">
                <h2>{this.props.title}</h2>
                {this.getSelect()}
            </div>
        )
    }
}