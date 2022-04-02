import './subi.css'

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
  saldo += 100
  console.log(saldo)
}

function App() {
 
  return (
    <div className="App">
      <p>Hello world</p>
      <Hijo nom="Òscar" />
      <Hija nom="Sara" />
      <Filla_2 nom="Sara" saldo="100" />
      <Fill_2 nom="Òscar" saldo="200" />
      <Elf nom="Encarni" saldo="300" />
    </div>
  )
}

export default App
