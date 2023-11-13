import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Header from '../components/header/Header'
import Table from '../components/Main/Table'
import { useEffect } from 'react'
import { setData } from './redux/slices/fetchData'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setEvents } from './redux/slices/eventSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setData().then((data) => {
      dispatch(setEvents(data))
    })
  }, [])

  return (
    <>
      <Header />
      <Table />
    </>
  )
}

export default App
