
import React from 'react'

export default class extends React.Component {
    getOrder () {
        if (typeof this.props.order === 'undefined') {
            return ''
        }

        if (this.props.order.name !== this.props.value) {
            return ''
        }

        if (this.props.order.direction === null) {
            return ''
        }

        if (this.props.order.direction  === true) {
            return '↑'
        }

        if (this.props.order.direction  === false) {
            return '↓'
        }
    }

    render () {
        return (
            <button
                type="button"
                className="form-control"
                onClick={() => this.props.onCLick(this.props.value)}
            >{this.props.children} {this.getOrder()}</button>
        )
    }
}
