/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

import * as types from "./types"

export const fetchAgenciesAction = (
    payload = {},
    meta = { resolve: () => { }, reject: () => { } }
) => dispatch => dispatch({
    type: types.FETCH_REQUESTED,
    meta,
    payload: { agencyId: null, ...payload },
})

export const selectAgencyAction = (
    payload = { agencyId: null },
    meta = { resolve: () => { }, reject: () => { } }
) => dispatch => dispatch({
    type: types.SELECTED,
    meta,
    payload: { agencyId: null, ...payload },
})
