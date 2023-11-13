import { AppDispatch, RootState } from './slices/types'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
