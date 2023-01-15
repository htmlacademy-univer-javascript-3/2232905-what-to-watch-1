import {UserData} from "../../types/user-data";
import {AuthorizationStatus, NameSpace} from "../../const";
import {createSlice} from "@reduxjs/toolkit";
import {checkAuthAction, loginAction, logoutAction} from "../api-actions";


const initialState: {
  authorizationStatus: AuthorizationStatus;
  isCheckAuthLoaded: boolean;
  user: UserData | null;
} = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isCheckAuthLoaded: false,
  user: null,
}


export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isCheckAuthLoaded = true;
      })
      .addCase(checkAuthAction.pending, (state, action) => {
        state.isCheckAuthLoaded = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.isCheckAuthLoaded = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null
      });
  }
});
