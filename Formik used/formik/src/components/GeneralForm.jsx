import React from 'react'
import { useFormik } from 'formik';
import "../styles/GeneralForm.css"
import { basicSchema } from "../schemas/index"

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)

    await new Promise((resolve)=>
    {
        setTimeout(resolve,1000)

    })
    actions.resetForm();

}



function GeneralForm() {
    const { values, errors, isSubmitting,handleChange, handleSubmit } = useFormik({

        initialValues: {

            email: '',
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,

    });
    return (
        <form action="" className='generalform' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" value={values.email} id='email' placeholder='Mail adresinizi Giriniz' onChange={handleChange} className={errors.email && "input-error"} />
                {errors.email && <p className='error' >{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="">Yaş</label>
                <input type="number" value={values.age} id='age' placeholder='Yaşınızı Giriniz' onChange={handleChange} className={errors.age && "input-error"} />
                {errors.age && <p className='error' >{errors.age}</p>}
            </div>

            <div>
                <label htmlFor="">Şifre</label>
                <input type="password" value={values.password} id='password' placeholder='Şifrenizi Giriniz' onChange={handleChange} className={errors.password && "input-error"} />
                {errors.password && <p className='error' >{errors.password}</p>}
            </div>

            <div>
                <label htmlFor="">Şifre Doğrulama</label>
                <input type="password" value={values.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Şifrenizi Doğrulayınız' className={errors.confirmPassword && "input-error"}
                />
                {errors.confirmPassword && (<p className='error' >{errors.confirmPassword}</p>)}
            </div>
        

            <button disabled={isSubmitting} type='submit' >Kaydet</button>



        </form>
    )
}

export default GeneralForm