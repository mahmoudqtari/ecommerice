import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


function Reviews() {
    let { productId } = useParams();
    const getProduct = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        return data.product;

    }
    
    let { data, isLoading } = useQuery('getProduct', getProduct);
    if (isLoading) {
        return <p>loading...</p>;
    }
    return (
        <>
            {data.reviews ? data.reviews.map((ele, index) =>
                <div className='reviews'>
                    <p>Review #{index + 1} {ele.comment} </p>
                    <p>Rating #{index + 1} : {ele.rating} Stars </p>
                </div>
            ) : <p>no reviews</p>}
        </>
    )
}

export default Reviews