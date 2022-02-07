import React from 'react';

const SearchBox = () => {
    return (
        <form className="form-inline">

            <div className="input-group">

                <div className="input-group-prepend">
                    <span 
                        className="input-group-text bg-light"
                    >
                        <i className="fas fa-search p-1 text-dark"></i>
                    </span>
                </div>

                <input 
                    type="text" 
                    className="form-control searchBox" 
                    placeholder="What would you like to buy today?"
                />

            </div>
        </form>
    )
};

export default SearchBox;