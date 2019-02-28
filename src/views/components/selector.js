import React from 'react'
import Loader from './loader';
import v4 from 'uuid/v4'

export default class extends React.Component {
    getSelect (id) {
        return (
            <select
                id={id}
                value={this.props.value ? this.props.value : ''}
                onChange={(event) => this.props.onChange(event.target.value)}
                className="form-control"
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
        const id = v4()
        if (this.props.loading && !this.props.options.length) {
            return (
                <div className="row">
                    <div className="col">
                        <label htmlFor={id}>{this.props.title}</label>
                    </div>
                    <div className="col">
                        <Loader></Loader>
                    </div>
                </div>
            )
        }

        if (this.props.loading) {
            return (
                <div className="row">
                    <div className="col">
                        <label htmlFor={id}>{this.props.title}</label>
                    </div>
                    <div className="col">
                        <Loader></Loader>
                        {this.getSelect(id)}
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col">
                    <label htmlFor={id}>{this.props.title}</label>
                </div>
                <div className="col">
                    {this.getSelect(id)}
                </div>
            </div>
        )
    }
}