import React, { useContext } from 'react'
import Input from '../../shared/Input'
import { useFormik } from 'formik'
import { CheckoutSchema } from '../register/validateSchema.js'
import { ChekContext } from './context/CheckContextProvider.jsx'
import { useNavigate } from 'react-router-dom'

function Chekout() {
    const {addToChekout} = useContext(ChekContext);
    let navigate = useNavigate();
    const initialValues = {
        couponName: '',
        address: '',
        phone: null
    }
    const onSubmit = async (coupon) => {
        const res = await addToChekout(coupon);
        return res;
        
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: CheckoutSchema
    })

    const inputs = [
        {
            type: 'text',
            title: 'couponName',
            name: 'couponName',
            id: 'couponName',
            value: formik.values.couponName,
        },
        {
            type: 'text',
            title: 'address',
            name: 'address',
            id: 'address',
            value: formik.values.address,

        },
        {

            type: 'phone',
            title: 'phone',
            name: 'phone',
            id: 'phone',
            value: formik.values.phone
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
                            <img className='w-100 h-100' src="photo/welcome.jpeg" alt="welcome" />
                        </div>
                    </div>
                    <div className='col-md-6 create p-5'>
                        <h2 className='pb-3'>Coupon</h2>
                        <form onSubmit={formik.handleSubmit}>
                            {renderInputs}
                            <div className='signup-button w-100 h-100 d-flex align-content-center justify-content-center'>
                                <button className='signup' onClick={() => {navigate('/profile')}} disabled={!formik.isValid} type='submit'>Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chekout