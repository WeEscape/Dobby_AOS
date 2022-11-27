import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user_id: '' || undefined,
  social_id: '' || null || undefined,
  social_type: '' || null || undefined,
  user_name: '' || null || undefined,
  profile_image_url: '' || null || undefined,
  profile_color: 'Blue' || 'Cyan' || 'Green' || 'Pink' || 'Purple' || 'Red' || 'Orange' || 'Yellow' || 'Brown' || 'Black' || null || undefined,
  is_connect: 0 || undefined,
  last_connected_at: 0 || null || undefined,
  apple_refresh_token: '' || null || undefined,
  created_at: 0 || undefined,
  updated_at: 0 || undefined,
  deleted_at: 0 || undefined,
  access_token: '' || undefined,
  refresh_token: '' || undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user_id = action.payload?.user_id;
      state.social_id = action.payload?.social_id;
      state.social_type = action.payload?.social_type;
      state.user_name = action.payload?.name;
      state.profile_image_url = action.payload?.profile_url;
      state.profile_color = action.payload?.profile_color;
      state.is_connect = action.payload?.is_connect;
      state.last_connected_at = action.payload?.last_connected_at;
      state.created_at = action.payload?.created_at;
      state.updated_at = action.payload?.updated_at;
      state.deleted_at = action.payload?.deleted_at;
    },
    setToken(state, action) {
      state.access_token = action.payload?.access_token;
      state.refresh_token = action.payload?.refresh_token;
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice;
