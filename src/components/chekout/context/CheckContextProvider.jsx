import axios from 'axios';
import React, { createContext } from 'react'

export const ChekContext = createContext(null);

function CheckContextProvider({children}) {
  const addToChekout = async ({coupon}) => {
    console.log("test");
    console.log(coupon);
    try{
        const token = localStorage.getItem("userToken");
        console.log(token);
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`,
        {coupon},
        {headers: {Authorization:`Tariq__${token}`}})
        return data;
    }
    catch(error){
        console.log(error);
    }
}
  return <ChekContext.Provider value={{addToChekout}}>
    {children}
  </ChekContext.Provider>
}

export default CheckContextProvider