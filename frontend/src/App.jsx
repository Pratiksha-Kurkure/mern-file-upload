import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MultiDoc from './MultiDoc'
import MultiImage from './MultiImage'
import Navbar from './Navbar'
import SingleImage from './SingleImage'

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/single-image' element={<SingleImage />}></Route>
        <Route path='/' element={<h1>home</h1>}></Route>
        <Route path='/multi-image' element={<MultiImage />}></Route>
        <Route path='/multi-docs' element={<MultiDoc />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}
