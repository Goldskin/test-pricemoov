import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from './types'
import { fetchPrices } from '../../../api'
// worker Saga: will be fired on types.FETCH_REQUESTED actions
function* fetchPricesSaga (action) {
    try {
        const prices = yield call(fetchPrices, action.payload)
        yield put({ type: types.FETCH_SUCCEEDED, payload: { prices } })
        yield put(dispatch => action.meta.resolve({ dispatch, payload: { prices } }))
    } catch (e) {
        yield put({ type: types.FETCH_FAILED, message: e.message })
        yield put(action.meta.reject)
    }
}

/*
  Starts fetchCategories on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* pricesSaga () {
    yield takeEvery(types.FETCH_REQUESTED, fetchPricesSaga)
}

export { pricesSaga }