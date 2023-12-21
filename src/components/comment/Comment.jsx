import React, { useContext } from 'react'
import {useParams } from 'react-router-dom';
import { CommentSchema } from '../register/validateSchema';
import { useFormik } from 'formik';
import Input from '../../shared/Input';
import { ProductReviewsContext } from '../context/ReviewsContext';

function Comment() {
    let {AddCommint} = useContext(ProductReviewsContext);
    let { productId } = useParams();
    const initialValues = {
        comment: '',
        rating: null,
    }
    const onSubmit = async comment => {
        const res = await AddCommint(comment,productId);
        return res;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: CommentSchema

    })

    const inputs = [
        {
            type: 'text',
            title: 'comment',
            name: 'comment',
            id: 'comment',
            value: formik.values.comment
        },
        {

            type: 'number',
            title: 'rating',
            name: 'rating',
            id: 'rating',
            value: formik.values.rating
        }
    ]

    const renderInputs = inputs.map((input, index) =>
        <Input
            value={input.value}
            type={input.type}
            key={index}
            id={input.id}
            name={input.name}
            title={input.title}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched}
        />

    )
  return (
    <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='welcome-img h-100 d-flex align-items-center justify-content-center'>
                        <img className='w-100 h-100' src='../../../../public/photo/welcome.jpeg' alt="welcome" />
                        </div>
                    </div>
                    <div className='col-md-6 create p-5'>
                        <h2 className='pb-3'>Comment</h2>
                        <form onSubmit={formik.handleSubmit}>
                            {renderInputs}
                            <div className='signup-button w-100 h-100 d-flex align-content-center justify-content-center'>
                                <button className='signup' disabled={!formik.isValid} type='submit'>Add Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Comment