// Exclusiu per Ract.context
import './subi.css'
import { useState, createContext } from 'react'


function Nieto({nom}) {
  return <div>
    Nieto {nom}
  </div>
}

function Hijo(nom) {
  return <div>
    Hijo: {nom}
    <Nieto nom="none"/> 
  </div>
}

const Contexto = React.createContext()

function App() {
  const [estado, setEstado] = useState({
    saldo: 100
  })
  const value = useMemo((estado) => ({estado, setEstado}), [estado])

  return(
    <Contexto.Provider value={estado}>
      <div className="App">
        <p>Encarnita {saldo}</p>
        <Hijo nom="Òscar" />
      </div>
    </Contexto.Provider>
  )
}

export default App
