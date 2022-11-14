import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_id: '',
  social_id: '',
  social_type: '',
  name: '',
  email: '',
  profile_url: '',
  profile_color: '',
  accessToken: '',
  // refreshToken: '',
  is_connect: 0,
  last_connected_at: 0,
  created_at: 0,
  updated_at: 0,
  deleted_at: 0,
  group_ids: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user_id = action.payload.user_id;
      state.social_id = action.payload.social_id;
      state.social_type = action.payload.social_type;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profile_url = action.payload.profile_url;
      state.profile_color = action.payload.profile_color;
      state.profile_color = action.payload.profile_color;
      state.accessToken = action.payload.accessToken;
      state.is_connect = action.payload.is_connect;
      state.last_connected_at = action.payload.last_connected_at;
      state.created_at = action.payload.created_at;
      state.updated_at = action.payload.updated_at;
      state.deleted_at = action.payload.deleted_at;
      state.group_ids = action.payload.group_ids;
      // state.refreshToken = action.payload.refreshToken;
    },
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.social_type = action.payload.social_type;
      // state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice;
