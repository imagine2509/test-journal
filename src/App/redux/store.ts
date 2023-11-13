import { configureStore } from '@reduxjs/toolkit'

import eventReducer from './slices/eventSlice'
// import usersReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    eventsState: eventReducer,
    //   usersState: usersReducer,
  },
})

export default store
