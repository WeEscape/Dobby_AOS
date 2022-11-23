import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user_id: '',
  social_id: '' || null,
  social_type: '' || null,
  user_name: '' || null,
  profile_image_url: '' || null,
  profile_color: 'Blue' || 'Cyan' || 'Green' || 'Pink' || 'Purple' || 'Red' || 'Orange' || 'Yellow' || 'Brown' || 'Black' || null,
  is_connect: 0,
  last_connected_at: 0 || null,
  apple_refresh_token: '' || null,
  created_at: 0,
  updated_at: 0,
  deleted_at: 0,
  access_token: '',
  refresh_token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user_id = action.payload.user_id;
      state.social_id = action.payload.social_id;
      state.social_type = action.payload.social_type;
      state.user_name = action.payload.name;
      state.profile_image_url = action.payload.profile_url;
      state.profile_color = action.payload.profile_color;
      state.is_connect = action.payload.is_connect;
      state.last_connected_at = action.payload.last_connected_at;
      state.created_at = action.payload.created_at;
      state.updated_at = action.payload.updated_at;
      state.deleted_at = action.payload.deleted_at;
    },
    setToken(state, action) {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice;
