import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import { Provider } from 'react-redux'
import store from './App/redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
)
