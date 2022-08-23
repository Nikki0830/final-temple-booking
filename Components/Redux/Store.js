import { createStore,applyMiddleware } from "redux"
// import logger from "redux-logger"
import { reducer} from "./Reducer"
export const Store = createStore(reducer)