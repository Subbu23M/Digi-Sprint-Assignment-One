import React from 'react';

import {Link,Route, Switch} from 'react-router-dom';

import Home from './Home';

import BasicDetails from './BasicDetails';

import AddressDetails from './AddressDetails';

import ContactDetails from './ContactDetails';

import { SideBarData } from './SideBarData';

const SideBar = () => {
    // Inline CSS
    const removeUnderLine = {
        textDecoration:'none'
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
                                const{title,icon,urlAddress} = ele;

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

            {/* <Switch>

                <Route
                    path='/home'
                    component={Home}
                    exact
                />

            </Switch> */}

            {/* col-2 */}
            <div className='col-lg-4 mx-auto mt-2'>

                <Switch>
                    
                    <Route
                        path='/basic'
                        component={BasicDetails}
                        exact
                    />
                    <Route
                        path='/address'
                        component={AddressDetails}
                        exact
                    />
                    <Route
                        path='/contact'
                        component={ContactDetails}
                        exact
                    />
                </Switch>
            </div>
            {/* end of col-2 */}

        </div>
        {/* end of row */}    
    </>
}
export default SideBar;