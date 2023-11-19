import React from 'react'
import WebFooter from '../components/web/WebFooter';
import WebNavbar from './../components/web/WebNavbar';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <WebNavbar />
      <Outlet />
      <WebFooter />
    </>
  )
}

export default Layout