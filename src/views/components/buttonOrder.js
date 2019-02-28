// ↑

import React from 'react'

export default class extends React.Component {
    render () {
        return (
            <button
                type="button"
                className="form-control"
                onClick={() => this.props.onCLick(this.props.value)}
            >{this.props.children}</button>
        )
    }
}
