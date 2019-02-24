/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/

import * as types from "./types"

export const fetchCategoriesAction = (
    payload = { agencyId: null, categoryId: null },
    meta = { resolve: () => { }, reject: () => { } }
) => dispatch => dispatch({
    type: types.FETCH_REQUESTED,
    meta,
    payload: { agencyId: null, categoryId: null, ...payload },
})

export const selectCategoryAction = (
    payload = { agencyId: null, categoryId: null },
    meta = { resolve: () => { }, reject: () => { } }
) => dispatch => dispatch({
    type: types.SELECTED,
    meta,
    payload: { agencyId: null, categoryId: null, ...payload },
})
