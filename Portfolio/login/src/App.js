import React from 'react'
import Menu from './Components/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
