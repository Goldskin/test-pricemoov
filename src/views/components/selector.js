import React from 'react'
import Loader from './loader';
import v4 from 'uuid/v4'
import Select from '@material-ui/core/Select'
import { FormLabel, Grid } from '@material-ui/core';


export default class extends React.Component {
    getSelect (id, title) {
        return (
            <Select
                id={id}
                children={this.getOptions(this.props.options)}
                value={this.props.value ? this.props.value : ''}
                onChange={(event) => this.props.onChange(event.target.value)}
                inputProps={{
                    name: this.props.title,
                    id,
                }}
            />
        )
    }

    getOptions (options) {
        return options.map(option => {
            return (
                <option
                    value={option.value}
                    key={option.value}
                >
                    {option.name}
                </option>
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
                    <FormLabel>{this.props.title}</FormLabel>
                    <Loader></Loader>
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
                    <FormLabel htmlFor={id}>{this.props.title}</FormLabel>
                    <Loader></Loader>
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
                <FormLabel htmlFor={id}>{this.props.title}</FormLabel>
                {this.getSelect(id)}
            </Grid>
        )
    }
}