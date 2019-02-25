import React from 'react'
import Loader from './loader';

export default class extends React.Component {
    getTables () {
        return (
            <table>
                <tbody>
                    {this.props.rows.map(row =>
                        <tr key={row.id}>{Object.values(row).map((cell, index) => (
                            <td key={index}>{cell}</td>
                        ))}</tr>
                    )}
                </tbody>
            </table>
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