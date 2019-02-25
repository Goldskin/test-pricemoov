/* OPERATIONS = REDUX THUNKS

This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack

*/

import * as actions from "./actions"
import { pricesActions } from "../prices"

const fetchCategoriesAndPrices = ({ agencyId }) => async dispatch => {
    await new Promise((resolve, reject) => actions.fetchCategoriesAction({ agencyId }, { resolve, reject })(dispatch))
        .then(({ payload }) => {
            const newPayload = {
                agencyId,
                categoryId: payload.categories[0].id
            }
            actions.selectCategoryAction(newPayload)(dispatch)
            return pricesActions.fetchPricesAction(newPayload)(dispatch)
        })
}
export {
    fetchCategoriesAndPrices,
}
