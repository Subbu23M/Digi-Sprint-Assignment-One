import React from 'react';

import hamburgermenu from '../Assets/Icons/breadcrumb.png';

import SearchBox from './SearchBox';

import locationPin from '../Assets/Icons/location_pin.png';

import addToCart from '../Assets/Icons/cart.png';

import profileIcon from '../Assets/Icons/profile.png';

const NavBar = () => {
    return (
        <nav>

            {/* row */}
            <div className='row'>

                {/* col-1 */}
                <div className='col-lg-2 mx-auto'>

                    <img
                        src={hamburgermenu}
                        className='hamburgerMenu'
                    />

                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className='col-lg-6 mx-auto'>

                    <SearchBox/>

                </div>
                {/* end of col-2 */}

                {/* col-3 */}
                <div className='col-lg-2 mx-auto'>

                    <div 
                        className='d-flex justify-content-center align-items-center'
                    >

                        <img
                            src={locationPin}
                            className='locationPin mx-2'
                        />

                        <h6 className='text-light'>
                            Delivery at your <br/> location
                        </h6>

                    </div>

                </div>
                {/* end of col-3 */}

                {/* col-4 */}
                <div className='col-lg-1'>

                    <img
                        src={addToCart}
                        className='addToCartIcon'
                    />

                </div>
                {/* end of col-4 */}

                {/* col-5 */}
                <div className='col-lg-1'>

                    <img
                        src={profileIcon}
                        className='profileIcon'
                    />

                </div>
                {/* end of col-5 */}

            </div>
            {/* end of row */}

        </nav>
    )
}

export default NavBar;