/* OPERATIONS = REDUX THUNKS

This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack

*/

import * as actions from "./actions"
import { categoriesOperations } from "../categories"

// const simpleQuack = actions.quack
const fetchAgencyAndCategories = async () => async dispatch => {
    await new Promise((resolve, reject) =>  actions.fetchAgenciesAction({}, { resolve, reject })(dispatch))
        .then(({ payload, dispatch }) => {
            const newPayload = {
                agencyId: payload.agencies[0].id
            }
            actions.selectAgencyAction(newPayload)(dispatch)
            return new Promise ((resolve, reject) => {
                categoriesOperations.fetchCategoriesAndPrices(newPayload, { resolve, reject })(dispatch)
            })
        })
}

export {
    fetchAgencyAndCategories
}
