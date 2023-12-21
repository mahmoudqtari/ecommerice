import './App.css'
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from './components/context/Cart';
import { router } from './layouts/Routes.jsx'
import { useContext, useEffect } from 'react';
import { UserContext } from './components/context/User.jsx';
import CheckContextProvider from './components/chekout/context/CheckContextProvider.jsx';
import ReviewsContext from './components/context/ReviewsContext.jsx';
function App() {
  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('userToken') != null) {
      setUserToken(localStorage.getItem('userToken'))
    }
  }, [])
  return (
    <>
      <ReviewsContext>
        <CartContextProvider>
          <CheckContextProvider>
            <RouterProvider router={router} />
          </CheckContextProvider>
        </CartContextProvider>
      </ReviewsContext>
    </>
  )
}

export default App
