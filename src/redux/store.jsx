import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./slice"

export const store = configureStore({
  reducer: {
    Car: ProductReducer,
  }
})