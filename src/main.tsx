import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css';
import './index.css';
import { AppRouter } from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
