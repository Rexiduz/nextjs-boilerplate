import { createAsyncThunk } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk(
  'async/signIn',
  async ({ username, password }, callback) => {
    try {
      const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
          username === process.env.REACT_APP_MOCK_USERNAME &&
          password === process.env.REACT_APP_MOCK_PASSWORD
            ? resolve({
                username,
                password
              })
            : reject({ code: 'AUTH909990ERR', message: 'invalid account' })
        }, 300)
      })

      return {
        data: res
      }
    } catch (error) {
      return {}
    }
  }
)
