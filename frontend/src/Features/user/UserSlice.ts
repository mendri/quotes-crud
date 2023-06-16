import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import IUserSlice from "../../Interfaces/IUserSlice"

const initialState: IUserSlice = {
  username: "",
  email: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    feedUser: (state: IUserSlice, action: PayloadAction<IUserSlice>) => {
      state.email = action.payload.email
      state.username = action.payload.username
    }
  }
})

export const { feedUser } = userSlice.actions

export const userReducer = userSlice.reducer