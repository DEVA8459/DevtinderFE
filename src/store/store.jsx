import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer  from "./feedSlice"
import coonectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
import ignoreRejectReducer from "./ignoreRejectSlice"


export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: coonectionReducer,
    request: requestReducer,
    ingoreReject :ignoreRejectReducer
  },
});
 