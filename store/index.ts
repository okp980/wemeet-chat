import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import { api } from "../services/api"
import auth from "./auth"
import notification from "./notification"
import theme from "./theme"
import AsyncStorage from "@react-native-async-storage/async-storage"

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth,
  notification,
  theme,
})

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware)

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
