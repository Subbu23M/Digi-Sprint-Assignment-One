import React from 'react';

import bannerImage from '../Assets/Banners/heroBanner.jpg';

const Banner = () => {
    return (
        <section>
            {/* row */}
            <div className='row'>

                {/* col */}
                <div className='col'>
                    <img
                        src={bannerImage}
                        className='bannerImage'
                        alt='bannerImage'
                    />
                </div>
                {/* end of col */}

            </div>
            {/* end of row */}
        </section>
    )
}
export default Banner;