import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export function CartContextProvider({children}){

    let [cartCount,setCartCount] = useState(0);
    
    const addToCartContext = async (productId) => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId},
            {headers: {Authorization:`Tariq__${token}`}})
            if(data.message == 'success'){
                toast('product add successfuly', {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            }
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    const getCartContext = async () => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
            {headers: {Authorization:`Tariq__${token}`}})
            console.log(data);
            setCartCount(data.count);
            
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    const clearCart = async () => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,
            {headers: {Authorization:`Tariq__${token}`}},{})
            console.log(data);
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    const removeItemContext = async (productId) => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,
            {productId},
            {headers: {Authorization:`Tariq__${token}`}})
            console.log(data);
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    
    const increasQty = async (productId) => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,
            {productId},
            {headers: {Authorization:`Tariq__${token}`}})
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    const decreasQty = async (productId) => {
        try{
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,
            {productId},
            {headers: {Authorization:`Tariq__${token}`}})
            
            return data;
        }
        catch(error){
            console.log(error);
        }
    }

    return <CartContext.Provider value={{decreasQty,increasQty,clearCart,addToCartContext,getCartContext,removeItemContext,cartCount}}>
        {children}
    </CartContext.Provider>
}