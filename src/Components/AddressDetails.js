import React,{useState} from 'react';

import Buttons from '../Reusable/Buttons';

import ButtonTwo from '../Reusable/ButtonTwo';

const AddressDetails = (props) => {
    // Declared & Assigned
    const titles = ['mr','ms','mrs'];
    // const gender = ['male','female','transgender'];
    // const relationship = ['single','married'];

    // State variable & function
    const[customerAddressType,setCustomerAddressType] = useState('');

    // Event Handler as callback function-1
    const handleCustomerAddressType = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerAddressType(inputValue);
    }

    // State variable & function
    const[customerAddress,setCustomerAddress] = useState('');

    // Event Handler as callback function-2
    const handleCustomerAddress = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerAddress(inputValue);
    }

    // State variable & function
    const[customerColony,setCustomerColony] = useState('');

    // Event Handler as callback function-3
    const handleCustomerColony = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerColony(inputValue);
    }

    // State variable & function
    const[customerStreet,setCustomerStreet] = useState('');

    // Event Handler as callback function-4
    const handleCustomerStreet = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerStreet(inputValue);
    }

    // State variable & function
    const[customerRegion,setCustomerRegion] = useState('');

    // Event Handler as callback function-5
    const handleCustomerRegion = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerRegion(inputValue);
    }

    // State variable & function
    const[customerCity,setCustomerCity] = useState('');

    // Event Handler as callback function-6
    const handleCustomerCity = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerCity(inputValue);
    }

    // State variable & function
    const[customerState,setCustomerState] = useState('');

    // Event Handler as callback function-7
    const handleCustomerState = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerState(inputValue);
    }

    // State variable & function
    const[customerCountry,setCustomerCountry] = useState('');

    // Event Handler as callback function-8
    const handleCustomerCountry = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerCountry(inputValue);
    }

    // State variable & function
    const[customerZipCode,setCustomerZipCode] = useState('');

    // Event Handler as callback function-9
    const handleCustomerZipCode = (e) => {
        const inputValue = e.target.value;

        // Invoke state function
        setCustomerZipCode(inputValue);
    }

    return <>

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
                        className='form-control widthDrop'
                        value={customerAddressType}
                        onChange={handleCustomerAddressType}
                    >

                        <option>
                            -- Address Type --
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
                        value={customerAddress}
                        onChange={handleCustomerAddress}
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
                        value={customerColony}
                        onChange={handleCustomerColony}
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
                        value={customerStreet}
                        onChange={handleCustomerStreet}
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
                        value={customerRegion}
                        onChange={handleCustomerRegion}
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
                        value={customerCity}
                        onChange={handleCustomerCity}
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
                        value={customerState}
                        onChange={handleCustomerState}
                    >

                        <option>
                            -- Select State --
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
                        value={customerCountry}
                        onChange={handleCustomerCountry}
                    >

                        <option>
                            -- Select Country --
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
                        value={customerZipCode}
                        onChange={handleCustomerZipCode}
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