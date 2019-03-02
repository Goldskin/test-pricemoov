import React from 'react'
import v4 from 'uuid/v4'
import Select from '@material-ui/core/Select'
import { Grid, CircularProgress, MenuItem, InputLabel } from '@material-ui/core';


export default class extends React.Component {
    getSelect (id) {
        return (
            <Select
                id={id}
                value={this.props.value ? this.props.value : ''}
                onChange={(event) => this.props.onChange(event.target.value)}
                inputProps={{
                    name: this.props.title,
                    id,
                }}
            >
                {this.getOptions(this.props.options)}
            </Select>
        )
    }

    getOptions (options) {
        return options.map(option => {
            return (
                <MenuItem
                    value={option.value}
                    key={option.value}
                >
                    {option.name}
                </MenuItem>
            )
        })
    }
    render () {
        const id = v4()
        if (this.props.loading && !this.props.options.length) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <InputLabel>{this.props.title}</InputLabel>
                    <CircularProgress />
                </Grid>
            )
        }

        if (this.props.loading) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <InputLabel htmlFor={id}>{this.props.title}</InputLabel>
                    <CircularProgress />
                    {this.getSelect(id)}
                </Grid>
            )
        }

        return (
            <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                <InputLabel htmlFor={id}>{this.props.title}</InputLabel>
                {this.getSelect(id)}
            </Grid>
        )
    }
}