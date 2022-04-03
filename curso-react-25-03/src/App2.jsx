import './subi.css'
import { useState } from 'react'

function Hijo(prop1) {
  return <div>
    El nom del fill és {prop1.nom}
    <Nieto nom="none"/> {/*comentario en jsx entre llaves */}
  </div>
}

function Nieto({nom}) {
  return <div>
    Nieto {nom}
  </div>
}

// a Hija, passem només el valor "destructiring"

function Hija({nom}) {
  nom += " Subirana" // puc modificar la propietat, però no el valor de la crida de la funció.
  return <div>
    El nom de la filla és {nom}
  </div>
}

function Filla_2({nom, saldo}) {
  return <div>
    El nom de la filla és {nom} i el saldo és {saldo}
  </div>
}

function Fill_2(param) {
  return <div>
    El nom del fill és {param.nom} i el saldo és {param.saldo}
  </div>
}

//Anem a fer que puguem canviar el saldo.
function Elf({nom, saldo}) {
  return <div>
    El nom és {nom} i el saldo és {saldo} 
    <br></br>
    <button onClick={() => { cambiarSaldo(saldo) }}>Cambiar saldo</button>
  </div>
}

function cambiarSaldo(saldo) {
  return saldo += 100
}

// para canviar realmente un valor, debemos meternos en la gestión del estado.
function ElfSaldo({nom, saldo}) {
  const [saldoElf, setSaldoElf] = useState(saldo) // saldoElf, nova variablem setSaldoElf funció i useState inicialització de valor inicial.

  function cambiarSaldoElf () {
    setSaldoElf(saldoElf + 10)
  }
  
  return <div>
    El nom és {nom} i el saldo és {saldoElf} 
    <br></br>
    <button onClick={() => { cambiarSaldoElf() }}>Cambiar saldo</button>
  </div>
}

// però com actualitzem el saldo d'una variable global?

// Primer intent, passant la funció de canvi.
function ElfSaldo2({nom, saldo, setSaldoElf: setSaldoNew}) {
  const [saldoElf, setSaldoElf] = useState(saldo) // saldoElf, nova variablem setSaldoElf funció i useState inicialització de valor inicial.

  function cambiarSaldoElf () {
    setSaldoElf(saldoElf + 10)
    setSaldoNew(saldoElf + 10)
  }
  
  return <div>
    Passant la funció de set. El nom és {nom} i el saldo és {saldoElf} 
    <br></br>
    <button onClick={() => { cambiarSaldoElf() }}>Cambiar saldo</button>
  </div>
}

function App() {
  const [saldoElfMain, setSaldoElfMain] = useState(1000)
  
  return(
    <div className="App">
      <p>Hello world</p>
      <Hijo nom="Òscar" />
      <Hija nom="Sara" />
      <Filla_2 nom="Sara" saldo="100" />
      <Fill_2 nom="Òscar" saldo="200" />
      <Elf nom="Encarni" saldo="300" />
      <p>Encarni {saldoElfMain}</p>
      <ElfSaldo nom="Encarni" saldo={saldoElfMain} />
      <ElfSaldo2 nom="Encarni" saldo={saldoElfMain} setSaldoElf={setSaldoElfMain} />
    </div>
  )
}

export default App
