import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'ping',
  initialState: {
    isPinging: false,
  },
  // reducers support `immer` so you can mutate the state in slice.
  reducers: {
    update: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    ping: (state) => ({
      ...state,
      isPinging: true,
    }),
    pong: (state) => ({
      ...state,
      isPinging: false,
    }),
  },
})

export const actions = slice.actions
export const reducer = slice.reducer
