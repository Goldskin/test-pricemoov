/* OPERATIONS = REDUX THUNKS

This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack

*/

import * as actions from "./actions"
import { categoriesActions } from "../categories"

// const simpleQuack = actions.quack

const fetchAgencyAndCategories = () => dispatch => {
    new Promise((resolve, reject) =>  actions.fetchAgenciesAction({}, { resolve, reject })(dispatch))
        .then(({ dispatch, payload }) => new Promise((resolve, reject) => {
            actions.selectAgencyAction({ agencyId: payload.agencies[0].id })(dispatch)
            categoriesActions.fetchCategoriesAction({ agencyId: payload.agencies[0].id }, { resolve, reject })(dispatch)
        }))
        .then(({ dispatch, payload }) => categoriesActions.selectCategoryAction({ categoryId: payload.categories[0].id })(dispatch))
}

export {
    fetchAgencyAndCategories
}
