import React, {useState, useEffect} from 'react';

function App () {  

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  const calcular = () => {
    if (operacao == "Somar")
      return parseFloat (num1) + (num2);
    else if (operacao == "Subtrair")
      return parseFloat (num1) - (num2)
    else if (operacao == "Multiplicar")
      return parseFloat (num1) * (num2)
    else  return parseFloat (num1) / (num2)
  }

  return (
    <div className="App">
        <h1>Calculadora</h1>
        <label>Primeiro Nº</label>
        <input 
          type="number" 
          value = {num1}
          onChange={(e) => setNum1(e.target.value)}   
        />
        <label>Segundo Nº</label>
        <input 
          type="number" 
          value = {num2}
          onChange={(e) => setNum2(e.target.value)}
          />

        <select 
          onChange={(e) => setOperacao(e.target.value)}>

          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label>Resltado {resultado}</label>
    </div>
  )
}

export default App
