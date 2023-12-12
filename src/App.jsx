import './App.css'
import {RouterProvider} from "react-router-dom";
import { CartContextProvider } from './components/context/Cart';
import {router} from './layouts/Routes.jsx'
import { useContext, useEffect } from 'react';
import { UserContext } from './components/context/User.jsx';
import CheckContextProvider from './components/chekout/context/CheckContextProvider.jsx';
function App() {
  let {setUserToken} = useContext(UserContext);
  useEffect(()=>{
    if(localStorage.getItem('userToken') != null){
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])
  return (
    <>
      <CartContextProvider>
        <CheckContextProvider>
            <RouterProvider router={router} />
        </CheckContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
