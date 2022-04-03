import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 /> {/* aquest es tot excepte contect que ho poso a un nou App */}
    <App />
  </React.StrictMode>,
  document.getElementById('rootCurso') // per defecte surt root i ho hem canviat per veure que a l'Index, tamble caldrà posar el mateix nom.
)
