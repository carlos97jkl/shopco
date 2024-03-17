// @packages
import { combineReducers } from "redux";

// @scripts
import transactionSlice from "./transaction";
import alertSlice from "./alert";
import dialog from "./dialog";

const rootReducer = combineReducers({
  dataTransaction: transactionSlice,
  alert: alertSlice,
  dialog: dialog,
});

export default rootReducer;
