import { useState } from 'react'
import Footer from './components/footer/footer'
import Home from './components/Home/Home'
import Header from './components/header/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
