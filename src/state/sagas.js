import { agenciesSaga } from "./ducks/agencies"
import { categoriesSaga } from "./ducks/categories"
import { all } from "redux-saga/effects"

export default function* rootSaga () {
    yield all([
        agenciesSaga(),
        categoriesSaga(),
    ])
}