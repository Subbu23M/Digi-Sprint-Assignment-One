import React from 'react';

const Buttons = (props) => {
    // Object Destructuring - ES6
    const {
        text
    } = props;

    return <>
        <button 
            className='btn btn-block btn-outline-light text-dark text-capitalize btnSpace mt-2'
        >
            {text}
        </button>
    </>
}

export default Buttons;