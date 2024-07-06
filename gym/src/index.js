import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.js'
import About from './components/About.js'
import Exercise from './components/Exercise.js'
import Contact from './components/Contact.js'
import Singleexercise from './components/Singleexercise.js'
import Book from './components/Book.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path= 'about' element={<About />} />
      <Route path= 'exercise' element={<Exercise />} />
      <Route path= 'contact' element={<Contact />} />
      <Route path= 'exercise/:id' element={<Singleexercise/>} />
      <Route path= 'book' element={<Book/>} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)