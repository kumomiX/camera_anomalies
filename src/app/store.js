import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import cameras from '../features/cameras/camerasSlice'

export default configureStore({
  reducer: {
    counter,
    cameras,
  },
})
