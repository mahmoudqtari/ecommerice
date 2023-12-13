import React, { useContext, useEffect } from 'react'
import { ChekContext } from '../chekout/context/CheckContextProvider';

function Order() {
    let { order,getOrder } = useContext(ChekContext);

    const getOrderCart = async () => {
        const res = await getOrder();
        return res;

    }
    useEffect(() => {
        getOrderCart();
    }, [])

    return (
        <>
            {order ? (order.map((ele) =>
            <div>
                <p>Coupon Name: {ele.couponName}</p>
                <p>Coupon Address: {ele.address}</p>
                <p>Coupon Address: {ele.finalPrice}</p>
            </div>
            )) : <h2>cart is empty</h2>}
        </>
    )
}

export default Order