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

export const fetchCamera = createAsyncThunk(
  'cameras/fetchCamera',
  async ({ uuid }, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.request(`/cameras/${uuid}`, { dispatch })
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
    loadingList: true,
    selected: null,
    loadingSelected: false,
  },
  reducers: {
    selectCamera: (state, { payload: cameraUuid }) => {
      state.selected = cameraUuid
    },
    clearSelectedCamera: (state) => {
      state.selected = null
    },
  },
  extraReducers: {
    [fetchCameras.pending]: (state) => {
      state.loadingList = true
    },
    [fetchCameras.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.loadingList = false
    },

    [fetchCamera.pending]: (state) => {
      state.loadingSelected = true
      state.selected = null
    },
    [fetchCamera.fulfilled]: (state, { payload }) => {
      state.selected = payload
      state.loadingSelected = false
    },
  },
})

export const { selectCamera, clearSelectedCamera } = cameras.actions

export default cameras.reducer
