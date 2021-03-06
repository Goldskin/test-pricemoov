import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from './types'
import { fetchCategories } from '../../../api'
// worker Saga: will be fired on types.FETCH_REQUESTED actions
function* fetchCategoriesSaga (action) {
    try {
        const categories = yield call(fetchCategories, action.payload)
        yield put({ type: types.FETCH_SUCCEEDED, payload: { categories } })
        yield put(dispatch => action.meta.resolve({ dispatch, payload: { categories } }))
    } catch (e) {
        yield put({ type: types.FETCH_FAILED, message: e.message })
        yield put(action.meta.reject)
    }
}

/*
  Starts fetchCategories on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* categoriesSaga () {
    yield takeEvery(types.FETCH_REQUESTED, fetchCategoriesSaga)
}

export { categoriesSaga }