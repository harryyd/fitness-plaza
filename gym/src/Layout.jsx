import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import MyProvider from './components/contexxt/Contextprovider.jsx'
import {store} from "./components/app/Store.js"
import { Provider } from 'react-redux'

function Layout() {
  return (
    <>

      <Provider store={store}>
        <MyProvider>
          <Header />
          <Outlet />
          <Footer />
        </MyProvider>
      </Provider>

    </>
  )
}

export default Layout