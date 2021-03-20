import { createSlice } from '@reduxjs/toolkit'
// import {
//   getPersistUser,
//   setPersistUser,
//   removePersistUser
// } from 'core/services/storage'
import { signIn } from '../thunks'

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    // value: getPersistUser(),
    value: null,
    pending: false
  },
  reducers: {
    revokeUser(state, action) {
      state.value = null
      // removePersistUser()
    }
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      const { data } = action.payload
      state.value = data
      // setPersistUser(data)
    }
  }
})

export default UserSlice
