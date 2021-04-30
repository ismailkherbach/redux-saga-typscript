import { combineReducers } from "redux";

import home from "./home/reducers";

const rootReducer = combineReducers({
  home,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
