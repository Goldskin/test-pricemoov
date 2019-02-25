import React from 'react'
import Loader from './loader';

export default class extends React.Component {
    getTables () {
        return (
            <table className="table">
                <tbody>
                    {this.props.rows.map((row, index) =>
                        <tr key={index}>{row.map((cell, index) => (
                            <td className={cell.className} key={index}>{cell.name}</td>
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