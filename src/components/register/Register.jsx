import React from 'react'
import Input from '../../shared/Input'
import './register.css'
import { useFormik } from 'formik'
import {registSchema} from './validateSchema.js'
import axios from 'axios'
import { toast } from 'react-toastify'

function Register() {
    const initialValues ={
        email: '',
        username: '',
        password: '',
        image: null
    }
    const handleFieldChange = (event) => {
        formik.setFieldValue('image', event.target.files[0])
    }
    const onSubmit = async users => {
        const formData = new FormData();
        formData.append("userName", users.username);
        formData.append("email", users.email);
        formData.append("password", users.password);
        formData.append("image", users.image);

        for(let data of formData.entries()){
            console.log(data);
        }
        const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);
        if(data.message === "success"){
            formik.resetForm();
            toast('Account Created Successfuly, plz verify your email to login', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: registSchema

    })

    const inputs = [
        {
            type: 'text',
            title: 'user name',
            name: 'username',
            id: 'username',
            value: formik.values.username
        },
        {

            type: 'password',
            title: 'user password',
            name: 'password',
            id: 'password',
            value: formik.values.password
        },
        {
            type: 'email',
            title: 'user email',
            name: 'email',
            id: 'email',
            value: formik.values.email
        },
        {
            type: 'file',
            title: 'image',
            name: 'image',
            id: 'image',
            onChange: handleFieldChange
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
            onChange={input.onChange || formik.handleChange}
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
                        <h2 className='pb-3'>Create Account</h2>
                        <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                            {renderInputs}
                            <div className='signup-button w-100 h-100 d-flex align-content-center justify-content-center'>
                                <button className='signup' disabled={!formik.isValid} type='submit'>Sign Up</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register