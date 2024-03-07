import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { fetchStore } from './utils/redux/Reduxstore.js'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={fetchStore}>
    <App />
  </Provider>

  </>,
)