import React from 'react';

import {Link,Route,Switch} from 'react-router-dom';

import BasicDetails from './BasicDetails';

const NewCustomer = () => {
    return (
        <div className='btnCustomer text-center'>

            <Link
                to='/basic'
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
                    path='/basic'
                    component={BasicDetails}
                    exact
                >
                </Route>
            </Switch>

        </div>
    )
}
export default NewCustomer;