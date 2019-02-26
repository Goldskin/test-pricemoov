import React from 'react'
import v4 from 'uuid/v4'

export default class extends React.Component {
    render () {
        const id = v4()
        return (
            <div className="custom-control custom-switch">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={id}
                    onChange={event => this.props.onChange(event.target.value)}
                    checked={this.props.value}
                />
                <label
                    className="custom-control-label"
                    htmlFor={id}
                >{this.props.label}</label>
            </div>
        )
    }
}
