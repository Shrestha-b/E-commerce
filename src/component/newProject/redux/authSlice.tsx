import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import type {AxiosResponse} from 'axios';
import {verifyOtpInterface} from '../authTypes';
import axiosClient from '../../../utils/axiosClient';
import AsyncStorageUtils from '../../../utils/AsyncStorage';
import {SESSION_TOKEN} from '../../../utils/constants';

import {authApi} from './authService';
import {isEmpty} from 'lodash';

const getFcmToken = async () => {
  const randomString =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const fcm_token = `dummy_fcm_token_${randomString}`;
  return fcm_token;
};

export const requestOtp = createAsyncThunk(
  'auth/requestOtp',
  async (mobileNumber: string, {rejectWithValue}) => {
    try {
      console.log({mobileNumber});

      const response = await axiosClient.post(
        '/users/api-user-send-otp',
        {
          mobile: mobileNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data: any = response.data;
      return data;
    } catch (error: {message: string} | any) {
      console.log({error: error.message});

      return rejectWithValue(error.message);
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (
    {mobile, otp, firstName, lastName}: verifyOtpInterface,
    {rejectWithValue},
  ) => {
    try {
      const fcm_token = await getFcmToken();
      const response: AxiosResponse = await axiosClient.post(
        '/users/api-user-login',
        {
          mobile,
          otp,
          first_name: firstName,
          last_name: lastName,
          fcm_token,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log({response: JSON.stringify(response.data)});
      const data = response.data;
      const token: string = data.data.access_token;
      await AsyncStorageUtils.setData(SESSION_TOKEN, token);
      return data;
    } catch (error: {message: string} | any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    setLoggedIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      (async () => await AsyncStorageUtils.cleanData())();
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(requestOtp.fulfilled, state => {
      //   state.loading = false;
      // })
      .addMatcher(
        authApi.endpoints.verifyOtp.matchFulfilled,
        (state, action) => {
          if (!action.payload?.error) {
            state.isLoggedIn = true;
          }
        },
      )
      .addMatcher(
        authApi.endpoints.localTokenCheck.matchFulfilled,
        (state, action) => {
          state.isLoggedIn = !isEmpty(action.payload);
          state.isLoading = false;
        },
      )
      .addMatcher(
        authApi.endpoints.localTokenCheck.matchPending,
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, action) => {
        state.isLoggedIn = false;
      });
    // .addMatcher(isPending(requestOtp, verifyOtp), state => {
    //   state.loading = false;
    //   state.error = '';
    // })
    // .addMatcher(isRejected(requestOtp, verifyOtp), (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export const {setLoggedIn, logOut} = authSlice.actions;
export default authSlice.reducer;
