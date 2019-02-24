/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

import * as types from "./types"

export const fetchPricesAction = (
    payload = {},
    meta = { resolve: () => { }, reject: () => { } }
) => dispatch => dispatch({
    type: types.FETCH_REQUESTED,
    meta,
    payload: { agencyId: null, categoryId: null, ...payload },
})
