import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  profile: '',
  accessToken: '',
  refreshToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profile = action.payload.profile;
      state.accessToken = action.payload.accessToken;
      // state.refreshToken = action.payload.refreshToken;
    },
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
      // state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice;
