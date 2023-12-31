import React, { useContext } from 'react'
import Input from '../../shared/Input'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'
import { LoginSchema } from '../register/validateSchema.js'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User.jsx'

function Login() {
    let { userToken, setUserToken } = useContext(UserContext);
    const initialValues = {
        email: '',
        password: '',
    }
    const navigate = useNavigate();
    if (userToken) {
        navigate(-1);
    }
    const onSubmit = async users => {
        const { data } = await axios.post('https://ecommerce-node4.vercel.app/auth/signin', users);
        //console.log(data);
        setUserToken(data.token);
        if (data.message === "success") {
            localStorage.setItem("userToken", data.token);
            navigate('/');
            toast('Account login Successfuly', {
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
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: LoginSchema

    })

    const inputs = [
        {
            type: 'email',
            title: 'user email',
            name: 'email',
            id: 'email',
            value: formik.values.email
        },
        {

            type: 'password',
            title: 'user password',
            name: 'password',
            id: 'password',
            value: formik.values.password
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
                        <h2 className='pb-3'>Login</h2>
                        <form onSubmit={formik.handleSubmit}>
                            {renderInputs}
                            <div className='signup-button w-100 h-100 d-flex align-content-center justify-content-center'>
                                <button className='signup' disabled={!formik.isValid} type='submit'>Login</button>
                            </div>
                            <Link to={'/auth/sendcode'}>Forgit password</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login