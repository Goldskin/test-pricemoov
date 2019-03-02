import React from 'react'
import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';


export default class extends React.Component {
    render () {
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.props.value}
                        onChange={event => this.props.onChange(event.target.value)}
                        value="checkedB"
                        color="primary"
                    />
                }
                label={this.props.label}
            />
        )
    }
}
