import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
