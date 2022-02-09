import React,{useState} from 'react';

import Buttons from '../Reusable/Buttons';

import ButtonTwo from '../Reusable/ButtonTwo';

const ContactDetails = (props) => {
    // Declared & Assigned
    const titles = ['mr', 'ms', 'mrs'];
    // const gender = ['male','female','transgender'];
    // const relationship = ['single','married'];

    // State variable & function
    const [customerTelephoneType, setCustomerTelephoneType] = useState('');

    // Event Handler as callback function-1
    const handleCustomerTelephoneType = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerTelephoneType(inputValue);
    }

    // State variable & function
    const [customerCountryCode, setCustomerCountryCode] = useState('');

    // Event Handler as callback function-2
    const handleCustomerCountryCode = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerCountryCode(inputValue);
    }

    // State variable & function
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');

    // Event Handler as callback function-3
    const handleCustomerPhoneNumber = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerPhoneNumber(inputValue);
    }

    // State variable & function
    const [customerExtensionNumber, setCustomerExtensionNumber] = useState('');

    // Event Handler as callback function-4
    const handleCustomerExtensionNumber = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerExtensionNumber(inputValue);
    }

    // State variable & function
    const [customerEmailId, setCustomerEmailId] = useState('');

    // Event Handler as callback function-5
    const handleCustomerEmailId = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerEmailId(inputValue);
    }

    return <>

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
                        value={customerTelephoneType}
                        onChange={handleCustomerTelephoneType}
                    >

                        <option>
                            -- Telephone --
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
                        className='form-control widthDrop'
                        value={customerCountryCode}
                        onChange={handleCustomerCountryCode}
                    >

                        <option>
                            -- Country Code --
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
                        type='number'
                        className='form-control'
                        value={customerPhoneNumber}
                        onChange={handleCustomerPhoneNumber}
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
                        type='number'
                        className='form-control'
                        value={customerExtensionNumber}
                        onChange={handleCustomerExtensionNumber}
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
                        value={customerEmailId}
                        onChange={handleCustomerEmailId}
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