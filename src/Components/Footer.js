import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* row */}
            <div className='row text-dark mx-5'>

                {/* col-1 */}
                <div className='col-lg-3'>

                    <h5 className='text-capitalize'>
                        copyright @ 2022
                    </h5>

                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className='col-lg-3'>

                    <h5>
                        customercare@dummyshop.in
                    </h5>

                </div>
                {/* end of col-2 */}

                {/* col-3 */}
                <div className='col-lg-3'>

                    <h5>
                        or call us at 88888XXXX8
                    </h5>

                </div>
                {/* end of col-3 */}

                {/* col-4 */}
                <div className='col-lg-3'>

                    <h5 className='text-capitalize'>
                        branch no.007
                    </h5>

                </div>
                {/* end of col-4 */}

            </div>
            {/* end of row */}
            
        </footer>
    )
}

export default Footer;