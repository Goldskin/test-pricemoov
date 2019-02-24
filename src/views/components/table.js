import React from 'react'

export default props => {
    return (
        <table>
            <tbody>
                {props.rows.map(row =>
                    <tr key={row.id}>{Object.values(row).map((cell, index) => (
                        <td key={index}>{cell}</td>
                    ))}</tr>
                )}
            </tbody>
        </table>
    )
}