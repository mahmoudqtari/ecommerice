import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductReviewsContext = createContext(null);

function ReviewsContext({ children }) {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);
    const getAllProducts = async (page) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("userToken");
            //console.log(token);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${page}&limit=4`)
            console.log(data);
            setProducts(data.products);
            setLoading(false);
            return data.products;
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const AddCommint = async (comment,productId) => {
        {console.log(comment)}
        {console.log(productId)}
        const token = localStorage.getItem("userToken");
        {console.log(token)}
        const { data } = await axios.post(`https://ecommerce-node4.vercel.app/products/${productId}/review`, comment,
        {headers: {Authorization:`Tariq__${token}`}}
        );
        console.log(data);

    }
    useEffect(() => {
        getAllProducts(1);
    }, []);
    if (loading) {
        return <p>loading...</p>
    }


    return <ProductReviewsContext.Provider value={{products,getAllProducts,AddCommint }}>
    {children}
  </ProductReviewsContext.Provider>
}

export default ReviewsContext