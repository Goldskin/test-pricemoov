import React from 'react'
import v4 from 'uuid/v4'
import Select from '@material-ui/core/Select'
import { Grid, CircularProgress, MenuItem, InputLabel, OutlinedInput, FormControl } from '@material-ui/core';


export default class extends React.Component {
    getSelect () {
        // return (
        //     <Select
        //         id={id}
        //         value={this.props.value ? this.props.value : ''}
        //         onChange={}
        //         inputProps={{
        //             name: ,
        //             id,
        //         }}
        //     >
        //         {this.getOptions(this.props.options)}
        //     </Select>
        // )
        const id = v4()
        return (
            <FormControl>
                <InputLabel
                    htmlFor={id}
                >
                    {this.props.title}
                </InputLabel>
                <Select
                    value={this.props.value ? this.props.value : ''}
                    onChange={(event) => this.props.onChange(event.target.value)}
                >
                    {this.getOptions(this.props.options)}
                </Select>
            </FormControl>
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

        if (this.props.loading && !this.props.options.length) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <h2>{this.props.title}</h2>
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
                    <h2>{this.props.title}</h2>
                    <CircularProgress />
                    {this.getSelect()}
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
                <h2>{this.props.title}</h2>
                {this.getSelect()}
            </Grid>
        )
    }
}