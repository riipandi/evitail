import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/renderer/app'

import '@/renderer/assets/global.css'

if (import.meta.env.DEV && !(document.getElementById('root') instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
