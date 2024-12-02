import React from 'react'
import Header from '../Componets/Header/Header'
import Footer from '../Componets/Footer/Footer'

const Layout = ({children}) => {
  return (
   <>
   <Header/>
   {
    children
   }
   <Footer/>
   </>
  )
}

export default Layout
