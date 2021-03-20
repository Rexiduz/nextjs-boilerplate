import { configureStore } from '@reduxjs/toolkit'

import UserSlice from './slices/user.slice'
import ApplicationSlice from './slices/application.slice'

export default configureStore({
  reducer: {
    application: ApplicationSlice.reducer,
    user: UserSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
