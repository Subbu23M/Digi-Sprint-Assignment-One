import React from 'react';
import Buttons from '../Reusable/Buttons';
import ButtonTwo from '../Reusable/ButtonTwo';

// Modules for Form Validation
import { useFormik } from 'formik';
import * as yup from 'yup';

// Step-1
const initialValues = {
    "teltype": "",
    "dialcode": "",
    "telno": "",
    "extnno": "",
    "emailid": "",
    "createdby": "RS",
    "Error": "string"
}

// Step-3
const validationSchema = yup.object().shape({
    teltype: yup.string().required(),
    dialcode: yup.string().required(),
    telno: yup.string().required().matches(/^[0-9\s]+$/, "Only numbers are allowed for this field"),
    extnno: yup.string().required(),
    emailid: yup.string().email('Invalid email').required('Required')
})

// Component
const ContactDetails = (props) => {
    // Declared & Assigned
    const titles = ['mr', 'ms', 'mrs'];
    const gender = ['male', 'female', 'transgender'];

    // Step-2
    const onSubmit = (values, {
        resetForm
    }) => {
        // console.log('classs',props.formData.formData);

        // Sending data to Array by Invoking callback function
        props.formData && props.formData(values);

        // To reset form
        resetForm({
            values: ""
        });
    }

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({

        // ES6 Concise Property
        initialValues,

        // Clickable event
        onSubmit,

        // Form Validation
        validationSchema
    })

    return <>

        <p className='lead mx-2'>
            Please provide your contact details:            
        </p>

        <section className='outline'>

            {/* 1 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        telephone type<span>
                            * 
                        </span>
                    </h5>
                </label>

                <div className='col-sm-7'>
                    <select
                        className='form-control'
                        name='teltype'
                        value={values.teltype}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option>
                            Telephone
                        </option>

                        {/* Embed Expression */}
                        {
                            titles.sort().map((ele,index) => {
                                return(
                                    <option
                                        key={index}
                                        value={ele}
                                        className='form-control'
                                    >
                                        {ele}
                                    </option>
                                )
                            })
                        }
                    </select>
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.teltype && touched.teltype ) && <span className='text-danger marginLeft'> {errors.teltype} </span>
                        )
                    }
                </div>
                        
            </div>
                
            {/* 2 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        dail code / country code<span>
                            * 
                        </span>
                    </h5>
                </label>

                <div className='col-sm-7'>
                    <select
                        className='form-control'
                        name='dialcode'
                        value={values.dialcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >

                        <option>
                            Country Code
                        </option>

                        {/* Embed Expression */}
                        {
                            gender.sort().map((ele,index) => {
                                return(
                                    <option
                                        key={index}
                                        value={ele}
                                        className='form-control'
                                    >
                                        {ele}
                                    </option>
                                )
                            })
                        }
                    </select>
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.dialcode && touched.dialcode ) && <span className='text-danger marginLeft'> {errors.dialcode} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 3 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        phone number<span>
                            * 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='telno'
                        value={values.telno}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.telno && touched.telno ) && <span className='text-danger marginLeft'> {errors.telno} </span>
                        )
                    }
                </div>
                        
            </div>
                
            {/* 4 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        extension no.
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='extno'
                        value={values.extnno}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.extnno && touched.extnno ) && <span className='text-danger marginLeft'> {errors.extnno} </span>
                        )
                    }
                </div>
                        
            </div>
                
            {/* 5 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        email <span className='text-uppercase'>
                            id 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='emailid'
                        value={values.emailid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.emailid && touched.emailid ) && <span className='text-danger marginLeft'> {errors.emailid} </span>
                        )
                    }
                </div>
                        
            </div>
                
            {/* Buttons Component */}
            <div className='buttonsElements d-flex justify-content-end align-items-center'>
                {/* Child Component Instances */}
                <Buttons
                    text = 'edit'
                />
                <Buttons
                    text = '+ more contact'
                />
                
                <ButtonTwo
                    text = 'submit'
                    onClickEvent = {handleSubmit}
                />

            </div>

        </section>
        
    </>
}

export default ContactDetails;