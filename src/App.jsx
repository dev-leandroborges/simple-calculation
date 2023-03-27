import React, {useState, useEffect} from 'react';

function App () {  

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  return (
    <div className="App">
        <h1>Calculadora</h1>
        <label>Primeiro Nº</label>
        <input type="number" />
        <label>Segundo Nº</label>
        <input type="number" />

        <select>
          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label>Resltado 0</label>
    </div>
  )
}

export default App
