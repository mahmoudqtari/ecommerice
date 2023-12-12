import Input from '../../shared/Input'
import { useFormik } from 'formik'
import axios from 'axios'
import { EmailSchema } from '../register/validateSchema.js'
import { useNavigate } from 'react-router-dom'

function SendCode() {
    const initialValues = {
        email: '',
    }
    const navigate = useNavigate();
    
    const onSubmit = async (users) => {
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,users)
        console.log(data);
        navigate('/auth/forgotPassword');
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: EmailSchema

    })

    const inputs = [
        {
            type: 'email',
            title: 'user email',
            name: 'email',
            id: 'email',
            value: formik.values.email
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
                        <h2 className='pb-3'>Send Code</h2>
                        <form onSubmit={formik.handleSubmit}>
                            {renderInputs}
                            <div className='signup-button w-100 h-100 d-flex align-content-center justify-content-center'>
                                <button className='signup' disabled={!formik.isValid} type='submit'>Send Code</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendCode