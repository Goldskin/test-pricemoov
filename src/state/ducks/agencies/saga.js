import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from './types'
import { fetchAgencies } from '../../../api'
// worker Saga: will be fired on types.FETCH_REQUESTED actions
function* fetchAgenciesSaga (action) {
    try {
        const agencies = yield call(fetchAgencies, action.payload.agencyId)
        yield put({ type: types.FETCH_SUCCEEDED, payload: { agencies } })
        yield put(dispatch => action.meta.resolve({dispatch, payload: {agencies}}))
    } catch (e) {
        yield put({ type: types.FETCH_FAILED, message: e.message })
        yield put(action.meta.reject)
    }
}

/*
  Starts fetchAgencies on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* agenciesSaga () {
    yield takeEvery(types.FETCH_REQUESTED, fetchAgenciesSaga)
}

export { agenciesSaga }