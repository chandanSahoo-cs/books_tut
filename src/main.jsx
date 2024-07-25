import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Preview from './pages/Preview.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/preview/:bookid' element={<Preview/>} />
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>,
)
