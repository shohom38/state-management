import { combineReducers } from "redux";

import AddSubReducer from "./reducers/addSub";
import CountingReducer from "./reducers/counting";

const rootReducer = combineReducers({
    value: AddSubReducer,
    count: CountingReducer
});

export default rootReducer;