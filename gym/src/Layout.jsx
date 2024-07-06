import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import MyProvider from './components/contexxt/Contextprovider.jsx'

function Layout() {
  return (
    <>
    <MyProvider>
    <Header/>
    <Outlet />
    <Footer />   
    </MyProvider>
    </>
  )
}

export default Layout