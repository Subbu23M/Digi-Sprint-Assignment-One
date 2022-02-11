import React from 'react';
import Buttons from '../Reusable/Buttons';
import ButtonTwo from '../Reusable/ButtonTwo';

// Modules for Form Validation
import { useFormik } from 'formik';
import * as yup from 'yup';
import {withRouter} from 'react-router-dom';

// Step-1
const initialValues = {
    'addtype': "",
    "addr1": "",
    "addr2": "",
    "addr3": "",
    "area": "",
    "region": "",
    "city": "",
    "state": "",
    "country": "",
    "zipcode": "",
    "notes": "Home Address ",
    "isdefault": "N",
    "status": "A",
    "createdby": "RS",
    "Error": null
}

// Step-3
const validationSchema = yup.object().shape({
    addtype: yup.string().required(),
    addr1: yup.string().max(60, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    addr2: yup.string().max(60, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    addr3: yup.string().max(60, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    region: yup.string().max(60, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    city: yup.string().max(60, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    state: yup.string().max(20, 'Too Long!').required(),
    country: yup.string().max(30, 'Too Long!').required(),
    zipcode: yup.string().required().matches(/^[0-9\s]+$/, "Only numbers are allowed for this field")
})

// Component
const AddressDetails = (props) => {
    // Declared & Assigned
    const addressType = ['Home', 'Work', 'Office'];
    const stateValues = ['Maharashtra', 'Uttar Pradesh', 'Chattisgarh'];
    const countryValues = ['India', 'Barbados', 'Guyana'];

    // Step-2
    const onSubmit = (values, {
        resetForm
    }) => {
        // console.log('classs',props.formData.formData);

        // Sending data to Array by Invoking callback function
        props.formData && props.formData(values);

        // After sending data to Array and navigate to address page
        props.history.push('/contact');

        // To reset form
        resetForm({
            values: ""
        });
    }

    const {handleChange, handleBlur, handleSubmit, values,errors,touched} = useFormik({

        // ES6 Concise Property
        initialValues,

        // Clickable event
        onSubmit,

        // Form Validation
        validationSchema
    })
    
    return <>

        <p className='lead mx-2'>
            Please provide your address details:            
        </p>

        <section className='outline'>

            {/* 1 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        address type<span>
                            * 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <select
                        className='form-control'
                        name='addtype'
                        value={values.addtype}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >

                        <option>
                            Address Type
                        </option>

                        {/* Embed Expression */}
                        {
                            addressType.sort().map((ele,index) => {
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
                            (errors.addtype && touched.addtype) && <span className='text-danger marginLeft'> {errors.addtype} </span> 
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
                        use my current <br/> location
                    </h5>
                                
                </label>

                <div className='col-sm-7 text-center'>
                    <i className="fas fa-map-marker text-center text-danger fa-2x"></i>
                </div>
                        
            </div>

            {/* 3 */}
            <div className='form-group row mb-2'>
                <label className='col-sm-5'>
                    <h5 className='text-capitalize'>
                        flat / house no. / building
                    </h5> 
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='addr1'
                        value={values.addr1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.addr1 && touched.addr1 ) && <span className='text-danger marginLeft'> {errors.addr1} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 4 */}
            <div className='form-group row mb-2'>
                <label className='col-sm-5'>
                    <h5 className='text-capitalize'>
                        colony / <br/> region
                    </h5> 
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='addr2'
                        value={values.addr2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.addr2 && touched.addr2 ) && <span className='text-danger marginLeft'> {errors.addr2} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 5 */}
            <div className='form-group row mb-2'>
                <label className='col-sm-5'>
                    <h5 className='text-capitalize'>
                        street name / <br/> landmark
                    </h5> 
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='addr3'
                        value={values.addr3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.addr3 && touched.addr3 ) && <span className='text-danger marginLeft'> {errors.addr3} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 6 */}
            <div className='form-group row mb-2'>
                <label className='col-sm-5'>
                    <h5 className='text-capitalize'>
                        region<span>
                            *
                        </span>
                    </h5> 
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='region'
                        value={values.region}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering Simple...if */}
                    {
                        (
                            (errors.region && touched.region) && <span className='text-danger marginLeft'> {errors.region} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 7 */}
            <div className='form-group row mb-2'>
                <label className='col-sm-5'>
                    <h5 className='text-capitalize'>
                        city<span>
                            *
                        </span>
                    </h5> 
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='city'
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering Simple...if */}
                    {
                        (
                            (errors.city && touched.city) && <span className='text-danger marginLeft'> {errors.city} </span>
                        )
                    }
                </div>
                        
            </div>

            {/* 8 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        state<span>
                            * 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <select
                        className='form-control'
                        name='state'
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >

                        <option>
                            Select State
                        </option>

                        {/* Embed Expression */}
                        {
                            stateValues.sort().map((ele,index) => {
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
                            (errors.state && touched.state) && <span className='text-danger marginLeft'> {errors.state} </span> 
                        )
                    }
                </div>
                        
            </div>

            {/* 9 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        country<span>
                            * 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <select
                        className='form-control'
                        name='country'
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >

                        <option>
                            Select Country
                        </option>

                        {/* Embed Expression */}
                        {
                            countryValues.sort().map((ele,index) => {
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
                            (errors.country && touched.country) && <span className='text-danger marginLeft'> {errors.country} </span> 
                        )
                    }
                </div>
                        
            </div>

            {/* 10 */}
            <div className='form-group row mb-2'>

                <label 
                    className='col-sm-5'
                >
                    <h5 className='text-capitalize'>
                        zip code<span>
                            * 
                        </span>
                    </h5>
                                
                </label>

                <div className='col-sm-7'>
                    <input
                        type='text'
                        className='form-control'
                        name='zipcode'
                        value={values.zipcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* Conditional Rendering - Simple...if */}
                    {
                        (
                            (errors.zipcode && touched.zipcode) && <span className='text-danger marginLeft'> {errors.zipcode} </span> 
                        )
                    }
                </div>
                        
            </div>
                
            {/* Buttons Component */}
            <div className='buttonsElements d-flex justify-content-end align-items-center'>
                {/* Child Component Instance */}
                <Buttons
                    text = 'edit'
                />
                <Buttons
                    text = '+ more address'
                />
                <ButtonTwo
                    text = 'save & next'
                    onClickEvent = {handleSubmit}
                />
            </div>

        </section>
    </>
}
export default withRouter(AddressDetails);