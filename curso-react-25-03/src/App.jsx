// Exclusiu per React.context

import './subi.css'
import { useState, createContext, useContext, useEffect } from 'react'

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
    saldo: 0,
    mov: [] /* afegeixo un array d'estats per poder guardar els estats anteriors */
  })
  
  const value = {estado, setEstado}

  // S'executara una sola vegada
  useEffect(() => {
    console.log ("Una sola vez: ", estado)
  }, [])
  
  // S'executara cada vegada que es modifiqui el estado
  useEffect(() => {
    setEstado({
      ...estado,
      mov: [...estado.mov,
      { fecha: new Date().toISOString, saldo: estado.saldo }]
    })
  }, [estado.saldo]);

  // S'executara cada vegada que faci un bucle la funció.
  console.log ("Estado: ", estado) // se executara cada vegada que es modifici el estado

  return(
    <Contexto.Provider value={value}>
      <div className="App">
        <h1>Lista de cambios de saldo</h1>
        <ul>
            {estado.mov.map(mov => <li key={mov.fecha}>{mov.fecha} = {mov.saldo}</li>)}
        </ul>
        <Madre nom="Encarnita" />
      </div>
    </Contexto.Provider>
  )
}

export default App
