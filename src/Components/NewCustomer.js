import React from 'react';

import {Link,Route,Switch} from 'react-router-dom';

import SideBar from './SideBar';

const NewCustomer = () => {
    return (
        <div className='btnCustomer text-center'>

            <Link
                to='/sideBar'
            >
                <button
                    className='btn btn-block btn-dark text-light text-capitalize'
                    target='_blank'
                >
                    new customer 
                </button>
            </Link>

            <Switch>
                <Route
                    path='/sideBar'
                    component={SideBar}
                    exact
                >
                </Route>
            </Switch>

        </div>
    )
};

export default NewCustomer;