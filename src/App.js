import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Shoe from './components/Shoe';
import ShoeDetails from './components/ShoeDetails';
import ShoeIndex from './components/ShoeIndex';
//import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="shoe" element={<Shoe/>}>
          <Route path="/" element={<ShoeIndex/>}></Route>
          <Route path=":slug" element={<ShoeDetails/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
