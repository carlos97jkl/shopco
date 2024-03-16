import transactionSlice from "./transaction";
import alertSlice from "./alert";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataTransaction: transactionSlice,
  alert: alertSlice,
});

export default rootReducer;
