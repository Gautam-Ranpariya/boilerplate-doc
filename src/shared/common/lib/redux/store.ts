import { configureStore } from '@reduxjs/toolkit'

import layoutReducer from './slices/common'
import testCaseReducer from './slices/test-case'
import vercelReducer from './slices/vercel'
import ciCdReducer from './slices/ci-cd'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    testCase: testCaseReducer,
    vercel: vercelReducer,
    ciCd: ciCdReducer,
  },
})

// Infer types for dispatch and state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
