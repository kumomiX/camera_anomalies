import { configureStore } from '@reduxjs/toolkit'
import cameras from '../features/cameras/camerasSlice'

export default configureStore({
  reducer: {
    cameras,
  },
})
