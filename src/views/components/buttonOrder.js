
import React from 'react'
import { TableSortLabel, TableCell, Tooltip } from '@material-ui/core';

export default class extends React.Component {
    render () {
        return (
            <TableCell>
                <Tooltip
                    title="Sort"
                    enterDelay={300}
                >
                    <TableSortLabel
                        active={this.props.order.name === this.props.value && this.props.order.direction !== null}
                        direction={
                            this.props.order.direction === true
                                ? 'asc'
                                : 'desc'
                        }
                        onClick={() => this.props.onCLick(this.props.value)}
                    >
                        {this.props.children}
                    </TableSortLabel>
                </Tooltip>
            </TableCell>
            
        )
    }
}
