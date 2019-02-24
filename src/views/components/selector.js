import React from 'react'

export default props => (
    <div className="d-flex justify-content-between">
        <h2>{props.title}</h2>
        <select
            value={props.value}
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