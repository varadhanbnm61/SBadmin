import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return <div id="wrapper">
    <BrowserRouter>
    <Routes>

<Route path='/home' element={<Dashboard/>}/>
<Route path='/some' element={<Sidebar/>}/>
<Route path='/me' element={<Home/>}/>



    </Routes>
    
    
    </BrowserRouter>
  </div>
}

export default App