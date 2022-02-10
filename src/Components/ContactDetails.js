import React from 'react';
import Buttons from '../Reusable/Buttons';
import ButtonTwo from '../Reusable/ButtonTwo';

const ContactDetails = (props) => {
    // Declared & Assigned
    const titles = ['mr', 'ms', 'mrs'];
    // const gender = ['male','female','transgender'];
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
                    >

                        <option>
                            Country Code
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
                    />
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
                    />
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
                        type='email'
                        className='form-control'
                    />
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
                />

            </div>

        </section>
        
    </>
}

export default ContactDetails;