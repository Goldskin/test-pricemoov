import React from 'react'
import Loader from './loader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class OrderedTable extends React.Component {
    getHeader () {
        if (!this.props.header) {
            return
        }
        return (
            <TableHead>
                <TableRow>
                    {this.props.header.map((cell, index) => (
                        <cell.Component value={cell.value} key={index}>{cell.name}</cell.Component>
                    ))}
                </TableRow>
            </TableHead>
        )
    }
    getTables () {
        return (
            <Paper>
                <Table>
                    {this.getHeader()}
                    <TableBody>
                        {this.props.rows.map((row, index) =>
                            <TableRow key={index}>
                                {row.map((cell, index) => (
                                    <TableCell
                                        padding="checkbox"
                                        className={cell.className}
                                        key={index}
                                    >
                                        {cell.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
    render () {
        if (this.props.loading && !this.props.rows.length) {
            return (
                <Loader></Loader>
            )
        }

        if (this.props.loading) {
            return (
                <>
                    <Loader></Loader>
                    {this.getTables()}
                </>
            )
        }
        return this.getTables()
    }

}

export default OrderedTable;
