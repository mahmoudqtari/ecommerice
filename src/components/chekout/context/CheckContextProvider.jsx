import axios from 'axios';
import React, { createContext, useState } from 'react'

export const ChekContext = createContext(null);
function CheckContextProvider({ children }) {
  let [order,setOrder] = useState(null);
  const addToChekout = async ({ couponName, address, phone }) => {
    try {
      const token = localStorage.getItem("userToken");
      console.log(token);
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`,
        {
          "couponName": couponName,
          "address": address,
          "phone": phone
        },
        { headers: { Authorization: `Tariq__${token}` } })
      console.log(data);
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }
  const getOrder = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
        { headers: { Authorization: `Tariq__${token}` } })
      console.log(data);
      setOrder(data.orders);
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }
  return <ChekContext.Provider value={{ addToChekout , getOrder , order  }}>
    {children}
  </ChekContext.Provider>
}

export default CheckContextProvider