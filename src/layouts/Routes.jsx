import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from './Layout';
import Home from '../components/web/Home';
import Categories from '../components/web/Categories';
import Register from '../components/register/Register';
import Login from '../components/login/Login';

import DashbordLayout from './DashbordLayout';
import DashbordHome from '../components/dashboard/Home';
import DashbordCategories from '../components/dashboard/Categories'
import CategoriesDetail from '../components/web/CategoriesDetail';
import Products from '../components/web/products/Products';
import Cart from '../components/cart/Cart';
import ProtectedRoute from '../components/web/ProtectedRoute';
import Profile from '../components/web/profile/Profile';
import SendCode from '../components/sendCode/SendCode.jsx'
import Forget from '../components/forget/Forget.jsx';
import Chekout from '../components/chekout/Chekout.jsx';
import Order from '../components/order/Order.jsx';
import UserInfo from '../components/web/profile/UserInfo.jsx';
import UserContact from '../components/web/profile/UserContact.jsx';
import ProductsList from '../components/web/productsList/ProductsList.jsx';
import Reviews from '../components/web/reviews/Reviews.jsx'
import Comment from '../components/comment/Comment.jsx';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />
      },
      {
        path: "/auth/forgotPassword",
        element: <Forget />
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/Chekout",
        element: <Chekout />
      },
      {
        path: "/auth/sendcode",
        element: <SendCode />
      },
      {
        path: "/reviews/:productId",
        element: <Reviews />
      },
      {
        path: "/comment/:productId",
        element: <Comment />
      },
      {
        path: "/productList",
        element: <ProductsList />
      },
      {
        path: "profile",
        element: 
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>,
        children:[
          {
            index: true,
            element: <UserInfo />
          },
          {
            path: "contact",
            element: <UserContact />
          }
        ]
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "cart",
        element: 
        <ProtectedRoute>
            <Cart />
        </ProtectedRoute>
      },
      {
        path: "/",
        //index: true,
        element: <Home />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "/products/category/:categoryId",
        element: <CategoriesDetail />
      },
      {
        path: "/product/:productId",
        element: <Products />
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