import agencies from "../ducks/agencies/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga () {
    yield all([
        agencies()
    ])
}