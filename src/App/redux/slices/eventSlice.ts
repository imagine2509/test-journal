import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EventType, EventsState } from './types'

const initialState: EventsState = {
  events: [],
}

const tweetsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state: EventsState, action: PayloadAction<EventType[]>) => {
      state.events = action.payload
    },
    addEvent: (state: EventsState, action: PayloadAction<EventType>) => {
      state.events = [...state.events, action.payload]
    },
    deleteEvent: (
      state: EventsState,
      action: PayloadAction<string | number>
    ) => {
      state.events = state.events.filter((item) => item.id !== action.payload)
    },
    setEventAsReaded: (
      state: EventsState,
      action: PayloadAction<string | number>
    ) => {
      state.events = state.events.map((item) =>
        item.id === action.payload ? { ...item, isReaded: true } : item
      )
    },
  },
})

export const { setEvents, addEvent, deleteEvent, setEventAsReaded } =
  tweetsSlice.actions

export default tweetsSlice.reducer
