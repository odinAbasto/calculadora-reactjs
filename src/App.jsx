import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Button(props) {
  return (
    <button onClick={() => props.handleClick(props.children)}>
      {props.children}
    </button>
  )
}

function App() {
  const [input, setInput] = useState(0)
  const [display, setDisplay] = useState(0)

  const addInput = (value) => {
    if ((display.toString().length == 1 && display == 0 && value !== ".") || display == 'Err' ) {
      setDisplay(value)
    } else {
      if (display.toString().length == 10) 
        return
      setDisplay(display + value)
    }

  }

  const clearDisplay = () => {
    setDisplay(0)
  }

  const calculateResult = () => {
    let result
    try {
      result = eval(display.replace(/x/g, "*"))
    } catch (Err) {
      setDisplay('Err')
      return
    }
    setDisplay(truncarDecimales(result,9))
  }

  function truncarDecimales(numero, decimales) {
    let factor = Math.pow(10, decimales);
    return Math.trunc(numero * factor) / factor;
  }
  function changeSing(){
    if(!isNaN(display)){
      setDisplay(Number(display) * -1)
    }
  }

  return (

    <div className='container'>
      <div className='display-container'>
        <span className='display'>{display}</span>
      </div>
      <div className='buttons-container'>
        <Button handleClick={clearDisplay} >C</Button>
        <Button handleClick={changeSing} >±</Button>
        <Button handleClick={addInput} >%</Button>
        <Button handleClick={addInput} >+</Button>

        <Button handleClick={addInput} >1</Button>
        <Button handleClick={addInput} >2</Button>
        <Button handleClick={addInput} >3</Button>
        <Button handleClick={addInput} >-</Button>

        <Button handleClick={addInput} >4</Button>
        <Button handleClick={addInput} >5</Button>
        <Button handleClick={addInput} >6</Button>
        <Button handleClick={addInput} >x</Button>

        <Button handleClick={addInput} >7</Button>
        <Button handleClick={addInput} >8</Button>
        <Button handleClick={addInput} >9</Button>
        <Button handleClick={addInput} >/</Button>

        <Button handleClick={addInput} >0</Button>
        <Button handleClick={addInput} >.</Button>
        <Button handleClick={calculateResult} >=</Button>
      </div>
    </div>
  )
}

export default App
