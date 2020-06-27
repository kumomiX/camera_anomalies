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
    uuid: '1787872313',
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui123',
    thumb: undefined,
    ip: '192.168.0.1',
  },
  {
    uuid: '21313434331231',
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.sudaasdad',
    thumb: undefined,
    ip: '192.168.0.2',
  },
]

const mockCamerasTwo = [
  {
    uuid: '123123123131334343',
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui444',
    thumb: undefined,
    ip: '192.168.0.3',
  },
  {
    uuid: '2131312312313232432423431',
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.sudaaaf',
    thumb: undefined,
    ip: '192.168.0.4',
  },
]

export const templates = createSlice({
  name: 'templates',
  initialState: {
    list: [
      {
        uuid: '12313',
        template_name: 'Кировский район',
        cameras: mockCameras,
      },
      {
        uuid: '2323123',
        template_name: 'Вахитовский район',
        cameras: mockCamerasTwo,
      },
    ],
    loadingList: true,
    loadingListError: false,
    selected: {
      uuid: '1233223232313',
      template_name: 'Кировский район',
    },
    loadingSelected: false,
  },
  reducers: {
    selectTemplate: (state, { payload: cameraUuid }) => {
      state.selected = cameraUuid
    },
    clearSelectedTemplate: (state) => {
      state.selected = null
    },
    reorderCameras: (state, { payload: { templateUuid, oldIdx, newIdx } }) => {
      const move = (arr, from, to) => {
        arr.splice(to, 0, arr.splice(from, 1)[0])
      }

      for (const template of state.list) {
        if (template.uuid === templateUuid) {
          move(template.cameras, oldIdx, newIdx)

          break
        }
      }
    },
    moveCameraToTemplate: (
      state,
      {
        payload: {
          sourceTemplateUuid,
          destinationTemplateUuid,
          cameraUuid,
          oldIdx,
          newIdx,
        },
      },
    ) => {
      let removed

      for (const template of state.list) {
        if (template.uuid === sourceTemplateUuid) {
          removed = template.cameras?.splice(oldIdx, 1)?.[0]
          break
        }
      }

      for (const template of state.list) {
        if (template.uuid === destinationTemplateUuid) {
          template.cameras.splice(newIdx, 0, removed)
          break
        }
      }
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

export const {
  selectTemplate,
  clearSelectedTemplate,
  moveCameraToTemplate,
  reorderCameras,
} = templates.actions

export default templates.reducer
