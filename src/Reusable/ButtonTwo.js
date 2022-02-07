import React from 'react';

const ButtonTwo = (props) => {
    // Object Destructuring - ES6
    const{text,onClickEvent} = props;

    return <>
        <button 
            className='btn btn-block btnColor text-light text-capitalize btnSpace mt-2'
            type='submit'
            onClick={onClickEvent}
        >
            {text}
        </button>
    </>
}

export default ButtonTwo;