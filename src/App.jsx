import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/Button"
import styled from 'styled-components'

function App() {
  const [theme, setTheme] = useState("light")
  // const butttons=["Primary Button","Default Button","Dashed Button","Text Button","Linked Button"];
  const div=styled.div`
    width: 400px;
    height: 150px;
  `;
  return (
    <div className="App">
  <Button >Primary Button</Button>
  <Button >Default Button</Button>
  <Button >Dashed Button</Button>
  <Button >Text Button</Button>
  <Button >Link Button</Button>
    </div>
  )
}

export default App
