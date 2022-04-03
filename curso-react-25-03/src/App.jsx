// Exclusiu per React.context

import './subi.css'
import { useState, createContext, useContext } from 'react'

function Hijo({nom, nieto}) {
  const {estado, setEstado} = useContext(Contexto)
  return <div>
    Hijo: {nom} = {estado.saldo}
    <br></br>
    <button onClick={() => setEstado({saldo: estado.saldo - 100})}>Gastar</button>
    <Nieto nom={nieto} />
  </div>
}

function Nieto({nom}) {
  const {estado, setEstado} = useContext(Contexto)
  return <div>
    Nieto: {nom} = {estado.saldo}
    <br></br>
    <button onClick={() => setEstado({saldo: estado.saldo - 10})}>Gastar</button>
  </div>
}

function Madre({nom}) {
  const {estado, setEstado} = useContext(Contexto)
  return <div>
    Madre: {nom} = {estado.saldo}
    <br></br>
    <button onClick={() => setEstado({saldo: estado.saldo + 500})}>Cobrar</button>
    <Hijo nom="Hijo 1" nieto="Nieto 1" />
  </div>
}

const Contexto = createContext()

function App() {
  const [estado, setEstado] = useState({
    saldo: 0
  })
  
  const value = {estado, setEstado}

  console.log (estado)
  return(
    <Contexto.Provider value={value}>
      <div className="App">
        <Madre nom="Encarnita" />
      </div>
    </Contexto.Provider>
  )
}

export default App
