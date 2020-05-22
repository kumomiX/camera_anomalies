import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'

// async
export const fetchCameras = createAsyncThunk(
  'cameras/fetchList',
  async (
    { camera_uuids, is_online, is_active, search, sort_by, sort, increase },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await API.request(`/cameras`, { dispatch })
      return response
    } catch {
      return rejectWithValue()
    }
  },
)

export const cameras = createSlice({
  name: 'counter',
  initialState: {
    list: null,
    loading: true,
  },
  extraReducers: {
    [fetchCameras.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.loading = false
    },
  },
})

export default cameras.reducer
