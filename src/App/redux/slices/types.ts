import store from '../store'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type EventType = {
  id: number | string
  added: string
  importance: 'Низкая' | 'Средняя' | 'Высокая' | 'Критическая'
  equip: string
  message: string
  isReaded: boolean
  responsibleEmployee: string
  employeePhoto: string
}

export type EventsState = {
  events: EventType[]
}

export type EventsActions =
  | { type: 'SET_EVENTS'; payload: Event[] }
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'DELETE_EVENT'; payload: string | number }
  | { type: 'SET_EVENT_READED'; payload: string | number }
