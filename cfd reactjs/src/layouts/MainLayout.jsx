import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
export default function MainLayout({ children }) {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}
