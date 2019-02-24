/* INDEX FILE

This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.

*/

import reducer from "./reducers"

import * as pricesSelectors from "./selectors"
import * as pricesOperations from "./operations"
import * as pricesActions from "./actions"
import * as pricesType from "./types"
import { pricesSaga } from "./saga"

export {
    pricesSelectors,
    pricesOperations,
    pricesActions,
    pricesType,
    pricesSaga,
}

export default reducer
