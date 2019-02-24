/* REDUCER(S)

It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.

*/

import { combineReducers } from "redux"
import * as types from "./types"

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SUCCEEDED:
            return [...state, ...action.payload.categories]
        default: return state
    }
}

const reducer = combineReducers({
    categories: categoriesReducer
})

export default reducer
