import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Features/user/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

type GetState = typeof store.getState

export type RootState = ReturnType<GetState>

export default store