import React from 'react'
import Loader from './loader';


export default class extends React.Component {
    getSelect () {
        return (
            <select
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
        if (this.props.loading && !this.props.options.length) {
            return (
                <div className="row">
                    <div className="col">
                        <h2>{this.props.title}</h2>
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
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="col">
                        <Loader></Loader>
                        {this.getSelect()}
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="col">
                    {this.getSelect()}
                </div>
            </div>
        )
    }
}