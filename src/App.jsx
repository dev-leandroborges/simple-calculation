function App () {  
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
