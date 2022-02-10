import React from 'react';
import Buttons from '../Reusable/Buttons';
import ButtonTwo from '../Reusable/ButtonTwo';

const AddressDetails = (props) => {
    // Declared & Assigned
    const addressType = ['Home', 'Work', 'Office'];
    const stateValues = ['Maharashtra', 'Uttar Pradesh', 'Chattisgarh'];
    const countryValues = ['India', 'Barbados', 'Guyana'];
    
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                />
            </div>

        </section>
    </>
}
export default AddressDetails;