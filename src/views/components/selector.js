import React from 'react'
import Loader from './loader';


export default (props) => {
    if (props.loading) {
        return (
            <div className="d-flex justify-content-between">
                <h2>{props.title}</h2>
                <Loader></Loader>
            </div>
        )
    }
    return (
        <div className="d-flex justify-content-between">
            <h2>{props.title}</h2>
            <select
                value={props.value ? props.value : ''}
                onChange={(event) => props.onChange(event.target.value)}
            >
                {props.options.map(option => {
                    return (
                        <option
                            value={option.value}
                            key={option.value}
                        >
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}