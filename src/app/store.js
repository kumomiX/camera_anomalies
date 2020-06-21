import { configureStore } from '@reduxjs/toolkit'
import cameras from '../features/cameras/camerasSlice'
import templates from '../features/templates/templatesSlice'

export default configureStore({
  reducer: {
    cameras,
    templates,
  },
})
