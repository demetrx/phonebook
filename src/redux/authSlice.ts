import { createSlice } from '@reduxjs/toolkit';
import { api } from 'services/contacts-api';
import type { RootState } from './store';

export interface authState {
  user: { name: null | string; email: null | string };
  isLoggedIn: boolean;
  token: null | string;
}

const initialState: authState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(api.endpoints.signup.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(api.endpoints.logout.matchFulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        api.endpoints.refresh.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;

export const authSelectors = {
  getIsLoggedIn: (state: RootState) => state.auth.isLoggedIn,
  getUserName: (state: RootState) => state.auth.user.name,
  getUserMail: (state: RootState) => state.auth.user.email,
  getToken: (state: RootState) => state.auth.token,
};
