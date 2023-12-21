import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductReviewsContext } from '../../context/ReviewsContext';

function ProductsList() {
    let {products,getAllProducts} = useContext(ProductReviewsContext);
    return (
        <>
                {products? (products.map((ele,index) =>
                    <div className='products'>
                        <span>Product Name: {ele.name}</span>
                        <Link to={`/reviews/${ele._id}`}>Reviews</Link>
                    </div> 
                )): <p>no data</p>}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li onClick={() => { getAllProducts(1) }} class="page-item"><a class="page-link" href="#">1</a></li>
                    <li onClick={() => { getAllProducts(2) }} class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}

export default ProductsList