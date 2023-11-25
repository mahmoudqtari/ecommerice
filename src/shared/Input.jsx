import React from 'react'

function Input({id,name,title,type,value,onChange,errors,onBlur,touched}) {
  return (
    <>
        <div className='input-group mb-3 d-block'>
            <label htmlFor={id}>{title}</label>
            <input className='form-control w-100' type={type} id={id} name={name} value={value} onBlur={onBlur} touched={touched} onChange={onChange}/>
            <p className='w-100'>{errors[name] && touched[name] && <p className='text text-danger'>{errors[name]}</p>}</p>
        </div>
    </>
  )
}

export default Input