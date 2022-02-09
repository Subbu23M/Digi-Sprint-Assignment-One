import React from 'react';

import Buttons from '../Reusable/Buttons';

import ButtonTwo from '../Reusable/ButtonTwo';

import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

// Modules for Form Validation
import { useFormik } from 'formik';

import * as yup from 'yup';

import {withRouter} from 'react-router-dom';

// Step-1
const initialValues = {
    "custid": "",
    "title": "",
    "firstname": "",
    "middlename": "",
    "lastname": "",
    "alias": "",
    "dateborn": null,
    "sex": "",
    "maritalstat": "",
    "nationality": "",
    "createddate": "2022-11-01",
    "createdby": "RS",
    "status": "A",
    "Error": null,
    "lastupdatedby": "RS",
    "lastupdateddate": "2022-11-01"
}

// Step-3
const validationSchema = yup.object({
    custid: yup.string().required('Required'),
    title: yup.string().required('Required'),
    firstname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    dateborn:yup.date().required('Required').nullable(),
    sex: yup.string().required('Required'),
    maritalstat:yup.string().required('Required'),
    nationality:yup.string().required('Required')
    // alias: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // middlename: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

// Component
const BasicDetails = (props) => {
    // Declared & Assigned
    const titles = ['mr','ms','mrs'];
    const gender = ['male','female','transgender'];
    const relationship = ['single','married'];
    const nationality = ['hindu','muslim','christian'];

    // Step-2
    const onSubmit = (values,{resetForm}) => {
        // console.log('classs',props.formData.formData);

        // Sending data to Array by Invoking callback function
        props.formData && props.formData(values);

        // After sending data to Array and navigate to address page
        props.history.push('/address');
        
        // To reset form
        resetForm({values:""});
    }
    
    const {handleChange, handleBlur, handleSubmit, values, setValues, touched, errors} = useFormik({

        // ES6 Concise Property
        initialValues,

        // Clickable event
        onSubmit,

        // Form Validation
        validationSchema
    })

    // Event Handler as callback function
    const handleDateChange = (date) => {
        setValues({...values,dateborn:date})
        // console.log(date);
    }

    return <>
        <p className='lead mx-2'>
            Please provide your basic details:            
        </p>

        <section className='outline'>

            <form autoComplete='off'>

                {/* 1 */}
                <div className='form-group row mb-2'>

                    <label 
                        className='col-sm-5'
                    >
                        <h5 className='text-capitalize'>
                            customer <span className='text-uppercase'>
                                id* 
                            </span>
                        </h5>
                    </label>

                    <div className='col-sm-7'>
                        <input
                            type='text'
                            className='form-control'
                            name='custid'
                            value={values.custid}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.custid && touched.custid) && <span className='text-danger'> {errors.custid} </span>
                            )
                        }
                    </div>
                </div>

                {/* 2 */}
                <div className='form-group row mb-2'>

                    <label className='col-sm-5'>
                        <h5 className='text-capitalize'>
                            title<span>
                                * 
                            </span>
                        </h5>        
                    </label>

                    <div className='col-sm-7'>
                        <select
                            className='form-control widthDro'
                            name='title'
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                            <option>
                                -- Title --
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
                                (errors.title && touched.title) && <span className='text-danger'> {errors.title} </span> 
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
                            first name<span>
                                * 
                            </span>
                        </h5>
                    </label>

                    <div className='col-sm-7'>
                        <input
                            type='text'
                            className='form-control'
                            name='firstname'
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.firstname && touched.firstname) && <span className='text-danger'> {errors.firstname} </span>
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
                            middle name
                        </h5>
                    </label>

                    <div className='col-sm-7'>
                        <input
                            type='text'
                            className='form-control'
                            name='middlename'
                            value={values.middlename}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.middlename && touched.middlename) && <span className='text-danger'> {errors.middlename} </span>
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
                            last name<span>
                                * 
                            </span>
                        </h5>
                    </label>

                    <div className='col-sm-7'>
                        <input
                            type='text'
                            className='form-control'
                            name='lastname'
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.lastname && touched.lastname) && <span className='text-danger'> {errors.lastname} </span>
                            )
                        }
                    </div>
                </div>

                {/* 6 */}
                <div className='form-group row mb-2'>

                    <label 
                        className='col-sm-5'
                    >
                        <h5 className='text-capitalize'>
                            alias
                        </h5>
                    </label>

                    <div className='col-sm-7'>
                        <input
                            type='text'
                            className='form-control'
                            name='alias'
                            value={values.alias}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.alias && touched.alias) && <span className='text-danger'> {errors.alias} </span>
                            )
                        }
                    </div>
                </div>

                {/* 7 */}
                <div className='form-group row mb-2'>

                    <label 
                        className='col-sm-5'
                    >
                        <h5 className='text-capitalize'>
                        date born<span>* </span>
                        </h5>
                    </label>

                    <div className='col-sm-7'>

                        <DatePicker
                            selected={values.dateborn}
                            onChange={handleDateChange}
                            dateFormat='dd/MM/yyyy'
                            name='dateborn'
                            // minDate={new Date()}
                            // value={formik.values.dateborn}
                            // onBlur={formik.handleBlur}
                            className='form-control'
                            placeholderText='DD/MM/YYYY'
                            // maxDate={new Date()}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            // control='date'
                        />

                        
                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.dateborn && touched.dateborn) && <span className='text-danger'> {errors.dateborn} </span>
                            )
                        }
                    </div>
                </div>

                {/* 8 */}
                <div className='row mb-2'>

                    <label className='col-sm-5'>
                        <h5 className='text-capitalize'>
                            gender<span>
                                * 
                            </span>
                        </h5>   
                    </label>
                        
                    <div className='col-sm-7'>
                        <select
                            className='form-control'
                            name='sex'
                            value={values.sex}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                            <option>
                                -- Gender --
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
                                (errors.sex && touched.sex) && <span className='text-danger'> {errors.sex} </span> 
                            )
                        }
                    </div>
                </div>

                {/* 9 */}
                <div className='row mb-2'>

                    <label className='col-sm-5'>
                        <h5 className='text-capitalize'>
                            marital status<span>
                                * 
                            </span>
                        </h5>   
                    </label>
                        
                    <div className='col-sm-7'>
                        <select
                            className='form-control'
                            name='maritalstat'
                            value={values.maritalstat}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                            <option>
                                -- Marital Status --
                            </option>

                            {/* Embed Expression */}
                            {
                                relationship.sort().map((ele,index) => {
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
                                (errors.maritalstat && touched.maritalstat) && <span className='text-danger'> {errors.maritalstat} </span> 
                            )
                        }
                    </div>
                </div>

                {/* 10 */}
                <div className='row mb-2'>

                    <label className='col-sm-5'>
                        <h5 className='text-capitalize'>
                            nationality<span>
                                * 
                            </span>
                        </h5>   
                    </label>
                        
                    <div className='col-sm-7'>
                        <select
                            className='form-control'
                            name='nationality'
                            value={values.nationality}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                            <option>
                                -- Nationality --
                            </option>

                            {/* Embed Expression */}
                            {
                                nationality.sort().map((ele,index) => {
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
                                (errors.nationality && touched.nationality) && <span className='text-danger'> {errors.nationality} </span> 
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

                    <ButtonTwo
                        text = 'save & next'
                        bgColor = 'bgColorValue'
                        onClickEvent = {handleSubmit}
                    />
                </div>

            </form>
        </section>
    </>
}

export default withRouter(BasicDetails);