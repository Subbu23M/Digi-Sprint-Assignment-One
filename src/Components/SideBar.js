import React from 'react';

import {Link,Route, Switch} from 'react-router-dom';

import BasicDetails from './BasicDetails';

import AddressDetails from './AddressDetails';

import ContactDetails from './ContactDetails';

import { SideBarData } from './SideBarData';

const SideBar = (props) => {
    // Inline CSS
    const removeUnderLine = {
        textDecoration: 'none'
    }

    return <>
        {/* row */}
        <div className='row sideBarParent'>

            {/* col-1 */}
            <div className='col-lg-4 sideBarChild'>

                <nav>
                    <ul className='unOrder'>
                        {
                            SideBarData.map((ele,index) => {

                                // Object Destructuring - ES6
                                const {
                                    title,
                                    icon,
                                    urlAddress
                                } = ele;

                                return (
                                    <li
                                        key={index}
                                        className='text-capitalize'
                                    >
                                        <Link
                                            to={urlAddress}
                                            style={removeUnderLine}
                                            className='listIng d-flex justify-content-center align-items-center'
                                        >
                                            <div className='iCon'>
                                                {icon}
                                            </div>

                                            <div className='tItle'>
                                                {title}
                                            </div>

                                        </Link>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            {/* end of col-1 */}

            {/* col-2 */}
            <div className='col-lg-4 leftSpace mt-2'>

                <Switch>
                    <Route
                        path='/basic'
                    >
                        <BasicDetails 
                            formData={props.formData}
                        />
                    </Route>

                    <Route
                        path='/address'
                    >
                        <AddressDetails 
                            formData={props.formData} 
                        />
                    </Route>

                    <Route
                        path='/contact'
                    >
                        <ContactDetails
                            formData={props.formData}
                        />
                    </Route>
                </Switch>

            </div>
            {/* end of col-2 */}

        </div>
        {/* end of row */}    
    </>
}
export default SideBar;