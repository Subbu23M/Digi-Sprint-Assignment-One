import React from 'react';

import sofaImage from '../Assets/Banners/Sofa.png';

import wowImage from '../Assets/Banners/wowOffers.png';

import excite from '../Assets/Banners/excite.png';

const Offer = () => {
    return (
        <section className='offer'>

            {/* row */}
            <div className='row'>

                {/* col-1 */}
                <div className='col-lg-6'>

                    <img
                        src={sofaImage}
                        className='sofaImage'
                        alt='sofaImage'
                    />

                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className='col-lg-6 d-flex justify-content-center align-items-center'>

                    <h4 className='font-weight-bold headerFour mx-2'>
                        Special offer <br/> <span className='mx-3'> on Home </span>  <br/> <span className='mx-3'> Furniture </span>
                    </h4>

                    <img
                        src={wowImage}
                        className='wowImage'
                        alt='wowImage'
                    />

                    <img
                        src={excite}
                        className='exciteImage'
                        alt='exciteImage'
                    />

                </div>
                {/* end of col-2 */}

            </div>
            {/* end of row */}

        </section>
    )
}

export default Offer;