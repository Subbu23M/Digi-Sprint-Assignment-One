import React from 'react';
import Buttons from '../Reusable/Buttons';
import ButtonTwo from '../Reusable/ButtonTwo';
import 'antd/dist/antd.css';
import { DatePicker} from 'antd';
import moment from 'moment';

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
const validationSchema = yup.object().shape({
    custid: yup.string().max(20, 'Too Long!').required().matches(/^[aA0-zZ9\s]+$/, "Only alphabets and numbers are allowed for this field "),
    title: yup.string().required(),
    firstname: yup.string().max(30, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    lastname: yup.string().max(30, 'Too Long!').required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    dateborn: yup.date().required().nullable(),
    sex: yup.string().required(),
    maritalstat: yup.string().required('Required field'),
    nationality: yup.string().required('Required field')
}) 

// Component
const BasicDetails = (props) => {
    // Declared & Assigned
    const titles = ['Mr', 'Mrs', 'Ms', 'Dr'];
    const gender = ['Male', 'Female'];
    const relationship = ['Single', 'Married', 'Divorced'];
    const nationality = ['Indian', 'Barbadian', 'Gymaican'];

    // Step-2
    const onSubmit = (values, {
        resetForm
    }) => {
        // console.log('classs',props.formData.formData);

        // Sending data to Array by Invoking callback function
        props.formData && props.formData(values);

        // After sending data to Array and navigate to address page
        props.history.push('/address');

        // To reset form
        resetForm({
            values: ""
        });
    }
    const {handleChange, handleBlur, handleSubmit, values, setValues,errors,touched} = useFormik({

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
        console.log(moment(date).format('YY-MM-DD'));
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
                        {/* Conditional Rendering - Simple...if */}
                        {
                            (
                                (errors.custid && touched.custid ) && <span className='text-danger marginLeft'> {errors.custid} </span>
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
                            className='form-control'
                            name='title'
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                            <option>
                                Title
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
                                (errors.title && touched.title) && <span className='text-danger  marginLeft'> {errors.title} </span> 
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
                                (errors.firstname && touched.firstname) && <span className='text-danger marginLeft'> {errors.firstname} </span>
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
                                (errors.lastname && touched.lastname) && <span className='text-danger marginLeft'> {errors.lastname} </span>
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
                            name='dateborn'
                            placeholder='DD/MM/YYYY'
                            selected={(values.dateborn && new Date(values.dateborn)) || null}
                            onChange={handleDateChange}
                            onBlur={handleBlur}
                            value={values.dateborn}
                        />
    
                        {/* Conditional Rendering Simple...if */}
                        {
                            (
                                (errors.dateborn && touched.dateborn) && <span className='text-danger marginLeft'> {errors.dateborn} </span>
                            )
                        }
                        {/* <CalendarIcon/> */}
                    </div>
                </div>

                {/* 8 */}
                <div className='form-group row mb-2'>

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

                            <option value='-1'>
                                Gender
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
                                (errors.sex && touched.sex) && <span className='text-danger marginLeft'> {errors.sex} </span> 
                            )
                        }
                    </div>
                </div>

                {/* 9 */}
                <div className='form-group row mb-2'>

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

                            <option value='-1'>
                                Marital Status
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
                                (errors.maritalstat && touched.maritalstat) && <span className='text-danger marginLeft'> {errors.maritalstat} </span>  
                            )
                        }
                    </div>
                </div>

                {/* 10 */}
                <div className='form-group row mb-2'>

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
                                Nationality
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
                                (errors.nationality && touched.nationality) && <span className='text-danger marginLeft'> {errors.nationality} </span> 
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