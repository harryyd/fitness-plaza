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
import App from './App.js'
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Tranning from './components/Tranning.js'
import Profile from './components/Profile.js'
import Program from './components/Program/Program.jsx'
import SingleProgram from './components/Program/SingleProgram.js'
import Cart from './components/Payments/Cart.jsx'
import Payment from './components/Payments/Payment.jsx'
import PaymentSuccess from './components/Payments/PaymentSuccess.jsx'

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
      <Route path='about' element={<About />} />
      <Route path='exercise' element={<Exercise />} />
      <Route path='contact' element={<Contact />} />
      <Route path='exercise/:id' element={<Singleexercise />} />
      <Route path='book' element={<Book />} />
      <Route path= 'login' element={<Login/>} />
      <Route path= 'Signup' element={<Signup/>} />
      <Route path= 'api/createWorkout' element={<Tranning/>} />
      <Route path= 'profile' element={<Profile/>} />
      <Route path = "program" element ={<Program />} />
      {/* <Route path = 'card' element={<Program/>} />  */}
      <Route path= 'SingleProgram' element={<SingleProgram/>} />
      <Route path= 'cart' element={<Cart />} />
      <Route path= 'confirmation' element={<Payment />} />
      <Route path= 'checkout' element={<PaymentSuccess />} />

    </Route> 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Auth0Provider
      domain="dev-gg7fj1f42axsx2j3.us.auth0.com"
      clientId="x0j9kgYanPUSvy3D8N5jv7hHiK9l5prl"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
      <App />
    </Auth0Provider>
  </>

)