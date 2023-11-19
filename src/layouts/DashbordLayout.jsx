import React from 'react'
import DashboardNavbar from '../components/dashboard/DashboardNavbar'
import DashboardFooter from './../components/dashboard/DashboardFooter';
import { Outlet } from 'react-router-dom';

function DashbordLayout() {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
      <DashboardFooter />
    </>
  )
}

export default DashbordLayout