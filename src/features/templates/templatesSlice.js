import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'

// async
export const fetchTemplates = createAsyncThunk(
  'templates/fetchList',
  async (
    { camera_uuids, is_online, is_active, search, sort_by, sort, increase },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await API.request(`/templates`, { dispatch })
      return response
    } catch {
      return rejectWithValue()
    }
  },
)

export const fetchTemplate = createAsyncThunk(
  'templates/fetchTemplate',
  async ({ uuid }, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.request(`/templates/${uuid}`, { dispatch })
      return response
    } catch {
      return rejectWithValue()
    }
  },
)

const mockCameras = [
  {
    uuid: 12313,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui',
    thumb: undefined,
    ip: '192.168.0.1',
  },
  {
    uuid: 213131231,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.suda',
    thumb: undefined,
    ip: '192.168.0.2',
  },
]

export const templates = createSlice({
  name: 'templates',
  initialState: {
    list: [
      {
        uuid: 12313,
        template_name: 'Кировский район',
        cameras: mockCameras,
      },
    ],
    loadingList: true,
    loadingListError: false,
    selected: null,
    loadingSelected: false,
  },
  reducers: {
    selectTemplate: (state, { payload: cameraUuid }) => {
      state.selected = cameraUuid
    },
    clearSelectedTemplate: (state) => {
      state.selected = null
    },
  },
  extraReducers: {
    [fetchTemplates.pending]: (state) => {
      state.loadingList = true
      state.loadingListError = false
    },
    [fetchTemplates.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.loadingList = false
      state.loadingListError = false
    },
    [fetchTemplates.rejected]: (state, { payload }) => {
      state.loadingList = false
      state.loadingListError = true
    },

    [fetchTemplate.pending]: (state) => {
      state.loadingSelected = true
      state.selected = null
    },
    [fetchTemplate.fulfilled]: (state, { payload }) => {
      state.selected = payload
      state.loadingSelected = false
    },
  },
})

export const { selectTemplate, clearSelectedTemplate } = templates.actions

export default templates.reducer
