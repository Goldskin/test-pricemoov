/* REDUCER(S)

It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.

*/

import { combineReducers } from "redux"
import * as types from "./types"

const rehydrate = (state, incoming) => ([
    ...state.filter(stateItem => !incoming.find(newPrice => newPrice.id === stateItem.id)),
    ...incoming,
])

const chooseDirection = order => {
    if (order === false) {
        return null
    }

    if (order === true) {
        return false
    }

    if (order === null) {
        return true
    }
}

const pricesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SUCCEEDED:
            return rehydrate(state, action.payload.prices)
        default:
            return state
    }
}

const fetchingReducer = (state = false, action) => {
    switch (action.type) {
        case types.FETCH_FAILED:
        case types.FETCH_SUCCEEDED:
            return false
        case types.FETCH_REQUESTED:
            return true
        default:
            return state
    }
}

const displayValidReducer = (state = false, action) => {
    switch (action.type) {
        case types.DISPLAY_VALID:
            return !state
        default:
            return state
    }
}

const orderReducer = (state = {name: null, direction: null}, action) => {
    switch (action.type) {
        case types.ORDER_BY:
            return {
                name: action.payload.name,
                direction: action.payload.name === state.name ? chooseDirection(state.direction) : true
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    prices: pricesReducer,
    fetching: fetchingReducer,
    displayValid: displayValidReducer,
    order: orderReducer,
})

export default reducer
