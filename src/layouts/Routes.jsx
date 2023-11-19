import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from './Layout';
import Home from '../components/web/Home';
import Categories from '../components/web/Categories';

import DashbordLayout from './DashbordLayout';
import DashbordHome from '../components/dashboard/Home';
import DashbordCategories from '../components/dashboard/Categories'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "*",
          element: <h2>page not found --web</h2>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashbordLayout />,
      children: [{
        path: "home",
        element: <DashbordHome />
      },
      {
        path: "categories",
        element: <DashbordCategories />
      },
      {
        path: "*",
        element: <h2>page not found --dashbord</h2>
      }],
    }
  ]);