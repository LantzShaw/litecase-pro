import { createStore, applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import rootReducer from '@/reducers'

// export const store = configureStore({
//   reducer: rootReducer,
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// const rootReducer = combineReducers({ ... });
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk))
