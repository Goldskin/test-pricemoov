/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

import * as types from "./types"

export const fetchAgenciesAction = (agencyId = null) => dispatch => dispatch({
    type: types.FETCH_REQUESTED,
    payload: {
        agencyId
    }
})

export const selectAgencyAction = agencyId => dispatch => dispatch({
    type: types.SELECTED,
    payload: {
        agencyId
    }
})
