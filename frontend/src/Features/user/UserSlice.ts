import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import IUserSlice from "../../Interfaces/IUserSlice"

const initialState: IUserSlice = {
  username: "Num Sei",
  email: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    feedUser: (state: IUserSlice, action: PayloadAction<IUserSlice>) => {
      state.email = action.payload.email
    }
  }
})

export const { feedUser } = userSlice.actions

export const userReducer = userSlice.reducer