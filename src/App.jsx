import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const data = [
  "step 1 : Learn React",
  "step 2 : Earn From Development",
  "step 3 : Invest Your Income",
]

function App() {

  const [step, setStep] = useState(1)

  const previousHandler = () => {
    if(step > 1) {
     setStep(step - 1)
    }else {
      setStep(3)
    }
  }

  // step  > 1 ? setStep(step - 1) : setStep(3)

  const nextHandler = () => {
    if(step < 3) {
     setStep(step + 1)
    }else {
      setStep(1)
    }
  }

    // step  < 3 ? setStep(step + 1) : setStep(1)

  const circleStyle = {
    display : 'flex',
    justifyContent:"space-around"
  } 

  const listStyle = {
    listStyle : "none",
    borderRadius : "50%",
    width : "50px",
    height : "50px",
    backgroundColor : "grey",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    marginTop : "50px",

  }

  const heading = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }

  const btns = {
    backgroundColor : "aqua",
    color : "white"
  }
  
  return (
    <>
    <div id="firstDiv">
        <ul style={circleStyle} >
        <li style={
          {
          ...listStyle,
          backgroundColor: step == 1 ?
          "blue" : "lightgray",
          color : step == 1 ? "white" : "black"
        }
        }>1</li>
        <li style={
          {
          ...listStyle,
          backgroundColor: step == 2 ?
          "blue" : "lightgray",
          color : step == 2 ? "white" : "black"
        }
        }>2</li>
        <li style={
          {
          ...listStyle,
          backgroundColor: step == 3 ?
          "blue" : "lightgray",
          color : step == 3 ? "white" : "black"
        }
        }>3</li>
       </ul>
    </div>

    <div id="secDiv">
       <h1>{data[step -1 ]}</h1>
    </div>

    <div id="btns">
        <button onClick={previousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
    </div>
    </>
  )
}

export default App
