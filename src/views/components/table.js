import React from 'react'
import Loader from './loader';


export default class extends React.Component {
    getHeader () {
        if (!this.props.header) {
            return
        }
        return (
            <thead>
                <tr>
                    {this.props.header.map((cell, index) => (
                        <th key={index}>
                            <cell.Component value={cell.value}>{cell.name}</cell.Component>
                        </th>
                    ))}
                </tr>
            </thead>
        )
    }
    getTables () {
        return (
            <table className="table">
                {this.getHeader()}
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